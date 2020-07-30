import React from 'react';
import './App.css';

function AboutCard(props) {
  const imageStyle = {
    width: '100px',
    height: '100px',
  }
  
  return (
    <div className="about_card">
      <img src={props.profilepic} style={imageStyle}></img>
      <h3>{props.name}</h3>
      <p>{props.bio}</p>
    </div>
  );
}

export default AboutCard;