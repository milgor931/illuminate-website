import React from 'react';
import '../components/App.css';

function Home() {

  return (
    <div className='homepage'>
      <section className='flexSection latestPodcasts'>
        <h1>LATEST PODCASTS</h1>
        <div className='videoContainer'>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <a href="">See More</a>
      </section>

      <section className='flexSection comingSoon'>
        <i>New Podcasts every Monday</i>
        <strong>Also available on Apple MUSIC</strong>
      </section>

      <section className='bestOfIlluminate'>
        <h1>Best of Illuminate</h1>
        <ul className='blogCardContainer'>
        <li className='blogCard'>
          <img src="https://www.barproducts.com/media/catalog/product/cache/2/image/640x640/9df78eab33525d08d6e5fb8d27136e95/b/a/barconic-20oz-mason-jar-mug-800.jpg" alt=""/>
          <div>Do Mason Jars make you cool?</div>
        </li>
        <li className='blogCard'>
          <img src="https://www.barproducts.com/media/catalog/product/cache/2/image/640x640/9df78eab33525d08d6e5fb8d27136e95/b/a/barconic-20oz-mason-jar-mug-800.jpg" alt=""/>
          <div>Do Mason Jars make you cool?</div>
        </li>
        <li className='blogCard'>
          <img src="https://www.barproducts.com/media/catalog/product/cache/2/image/640x640/9df78eab33525d08d6e5fb8d27136e95/b/a/barconic-20oz-mason-jar-mug-800.jpg" alt=""/>
          <div>Do Mason Jars make you cool?</div>
        </li>
        
        </ul>
      </section>

      <footer className='flexSection spaceBetween'>
        <a href=""><h2>see all podcasts</h2></a>
        <h2>social media icons</h2>
      </footer>
    </div>
  );
}

export default Home;