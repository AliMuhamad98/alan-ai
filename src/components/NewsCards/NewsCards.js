import React from 'react'
import { Grid, Grow, Typography } from '@material-ui/core';
import NewsCard from '../NewsCard/NewsCard';
import useStyles from './Styles'



const infoCards = [
    { color: '#838C7E', title: 'Latest News', text: 'Give me the latest news' },
    { color: '#6B7367 ', title: 'News By Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
    { color: '#323834', title: 'News By Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
    { color: '#2F302F', title: 'News By Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from BBC' },
];

const NewsCards = ({ articles, activeArticales }) => {
    const classes = useStyles();



    if (!articles.length) {
        return (
            <Grow in>
                <Grid className={classes.container} container alignItems="stretch" spacing={3} >
                    {infoCards.map((infoCard) => (
                        <Grid className={classes.infoCard} item xs={12} sm={6} md={4} lg={3}>
                            <div className={classes.card} style={{ backgroundColor: infoCard.color }}>
                                <Typography variant="h5">
                                    {infoCard.title}
                                </Typography>
                                {infoCard.info ? (<Typography variant="h6">
                                    <strong>
                                        {infoCard.title.split(' ')[2]}:
                                    </strong>
                                    <br />
                                    {infoCard.info}
                                </Typography>) : null}

                                <Typography variant="h6">
                                    Just Say : <br /> {infoCard.text}
                                </Typography>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Grow>
        )
    }



    return (
        <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3} >
                {articles.map((article, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
                        <NewsCard article={article} activeArticales={activeArticales} index={index} />
                    </Grid>
                ))}
            </Grid>
        </Grow>
    )
}

export default NewsCards;