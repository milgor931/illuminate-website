import React, { useState, useEffect } from 'react';
import '../components/App.css';
import PodcastCard from '../components/PodcastCard';

function Podcast() {

  const [ podcasts, setPodcasts ] = useState([]);

  useEffect(() => {
    fetch("https://illuminate-website.firebaseio.com/podcasts.json", {
      method: "GET",
    })
    .then(response => {
      return response.json();
    })
    .then(responseData => {
      const updatedPodcasts = responseData.map(podcast => {
        return ({
          ...podcast,
        })
    })
    setPodcasts(updatedPodcasts)
  })
      .catch(error => {
        console.log("Something went wrong! " + error);
      })
  }
    , []);

    let podcastList = podcasts.map(pod => {
      return (
        <PodcastCard
          key={Math.random()}
          podcast_title={pod.title}
          imageurl={pod.imageURL}
          podcast_summary={pod.summary}
        />
      )
    }
    )

  return (
    <div className='podcastPage'>
      {podcastList}
  </div>
  );
}

export default Podcast;