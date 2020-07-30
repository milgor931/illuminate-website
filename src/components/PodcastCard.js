import React from 'react';
import './App.css';

function PodcastCard(props) {

  const iconStyle = {
    fontSize: '20px',
    display: 'inline',
    color: 'white',
  }

  const imageStyle = {
    width: '300px',
    height: '100px',
  }

  return (
      <div className="podcast_card">
        <img alt="podcast topic" src={props.imageurl} style={imageStyle}></img>
        <h3><a href="https://www.npr.org/podcasts/"><i className='fas fa-play-circle' style={iconStyle}></i></a> {props.podcast_title}</h3>
        <p>{props.podcast_summary}</p>
    </div>
  );
}

export default PodcastCard;