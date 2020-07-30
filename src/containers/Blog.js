import React, { useState, useEffect } from 'react';
import '../components/App.css';
import Article from '../components/Article';

function Blog() {

  const [ articles, setArticles ] = useState([]);

  useEffect(() => {
    fetch("https://illuminate-website.firebaseio.com/articles.json", {
      method: "GET",
    })
    .then(response => {
      return response.json();
    })
    .then(responseData => {
      const updatedArticles = responseData.map(article => {
        return ({
          ...article,
        })
    })
    setArticles(updatedArticles)
  })
      .catch(error => {
        console.log("Something went wrong! " + error);
      })
  }
    , []);

    let articleList = articles.map(art => {
      return (
        <Article
          key={Math.random()}
          heading={art.title}
          subheading={art.subheading}
          text={art.content}
        />
      )
    }
    )

  return (
    <div style={{textAlign: "center"}}>
      {articleList}
    </div>
  );
}

export default Blog;