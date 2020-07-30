import React from 'react';
import './App.css';

function Article(props) {

  return (
    <div className="article">
      <h1>{props.heading}</h1>
      <h3>{props.subheading}</h3>
      <p>{props.text}</p>
    </div>
  );
}

export default Article;