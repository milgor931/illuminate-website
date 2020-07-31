import React from 'react';
import '../components/App.css';

function Home() {

  return (
    <div className='homepage'>
      <section className='latestPodcasts'>
        <h1>LATEST PODCASTS</h1>
        <div className='videoContainer'>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <a href="">See More</a>
      </section>

      <section className='comingSoon'>
        <i>New Podcasts every Monday</i>
        <strong>Also available on Apple MUSIC</strong>
      </section>
    </div>
  );
}

export default Home;