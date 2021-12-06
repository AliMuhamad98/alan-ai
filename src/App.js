import React, { useEffect, useState } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import NewsCards from './components/NewsCards/NewsCards';
import wordsToNumbers from 'words-to-numbers';
import useStyles from './Styless'
const alanKey = 'd7d1f6e4824f55c38fb8ea18c7e0d9022e956eca572e1d8b807a3e2338fdd0dc/stage';


const App = () => {
  const classes = useStyles();
  const [newArticales, setNewArticles] = useState([]);
  const [activeArticales, setActiveArticles] = useState(0);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === 'newHeadlines') {
          setNewArticles(articles);
        } else if (command === 'highlight') {
          setActiveArticles((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === 'open') {
          const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
          const article = articles[parsedNumber - 1];
          if (parsedNumber > articles.length) {
            alanBtn().playText('Please try that again...');
          } else if (article) {
            window.open(article.url, '_blank');
            alanBtn().playText('It;s Opening...');
          } else {
            alanBtn().playText('Please try that again...');
          }
        }
      }
    })
  }, [])

  return (
    <div>
      <div className={classes.logoContainer}>
        <img src="https://media.istockphoto.com/photos/gentle-robot-hand-picture-id1282210592?b=1&k=20&m=1282210592&s=170667a&w=0&h=O72m_E6UKQVfzLFXWW-CA1x0n9NJAurxYNxLVmAWKWU=" className={classes.alenLogo} alt="alan logo" style={{ marginTop: "10px" }} />
      </div>
      <NewsCards articles={newArticales} activeArticales={activeArticales} />
    </div>
  )
}

export default App