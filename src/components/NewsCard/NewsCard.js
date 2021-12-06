import React, { useState, useEffect, createRef } from 'react'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import classNames from 'classnames'
import useStyles from './Style'
const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, index, activeArticales }) => {
    const classes = useStyles();


    const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50)
    const [elRefs, setElRefs] = useState([]);
    useEffect(() => {
        setElRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()));
    }, []);

    useEffect(() => {
        if (index === activeArticales && elRefs[activeArticales]) {
            scrollToRef(elRefs[activeArticales]);
        }
    }, [index, activeArticales, elRefs])





    return (
        <Card ref={elRefs[index]} className={classNames(classes.card, activeArticales === index ? classes.activeCard : null)}>
            <CardActionArea href={url} target="_blank">
                <CardMedia className={classes.media} image={urlToImage || 'https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?b=1&k=20&m=1182477852&s=170667a&w=0&h=JELSsVdEVClnMhZRbZs2GJQ8DLqd5OKkru-VANqlf24='} />
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary" component="h2">
                        {(new Date(publishedAt)).toDateString()}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="h2">
                        {source.name}
                    </Typography>
                </div>
                <Typography className={classes.title} gutterBottom variant="h5">
                    {title}
                </Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary">What's New</Button>
                <Typography variant="h5" color="textSecondary">
                    {index + 1}
                </Typography>
            </CardActions>
        </Card>
    )
}

export default NewsCard
