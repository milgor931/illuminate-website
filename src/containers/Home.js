import React from 'react';
import '../components/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagramSquare, faFacebookSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
import { faPlayCircle, faVolumeUp } from '@fortawesome/free-solid-svg-icons'

function Home() {

  return (
    <div className='homepage'>
      <section className=' latestPodcasts'>
        <h1>LATEST PODCASTS</h1>
        <div className='videoContainer'>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <a href="" className='baseButton'>See More</a>
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
          <div className='blogCardInfo'>
            <span className='date'>February 20, 1992</span>
            <h3>Do Mason Jars make you cool?</h3>
            <div className='playbackControls'>
              <FontAwesomeIcon icon={faPlayCircle} />
              <div className='progressIndicator'></div>
              <FontAwesomeIcon icon={faVolumeUp} />
              <div className='progressIndicator volumeIndicator'></div>
            </div>
          </div>
        </li>
        
        <li className='blogCard'>
          <img src="https://www.barproducts.com/media/catalog/product/cache/2/image/640x640/9df78eab33525d08d6e5fb8d27136e95/b/a/barconic-20oz-mason-jar-mug-800.jpg" alt=""/>
          <div className='blogCardInfo'>
            <span className='date'>February 20, 1992</span>
            <h3>Do Mason Jars make you cool?</h3>
            <div className='playbackControls'>
              <FontAwesomeIcon icon={faPlayCircle} />
              <div className='progressIndicator'></div>
              <FontAwesomeIcon icon={faVolumeUp} />
              <div className='progressIndicator volumeIndicator'></div>
            </div>
          </div>
        </li>

        <li className='blogCard'>
          <img src="https://www.barproducts.com/media/catalog/product/cache/2/image/640x640/9df78eab33525d08d6e5fb8d27136e95/b/a/barconic-20oz-mason-jar-mug-800.jpg" alt=""/>
          <div className='blogCardInfo'>
            <span className='date'>February 20, 1992</span>
            <h3>Do Mason Jars make you cool?</h3>
            <div className='playbackControls'>
              <FontAwesomeIcon icon={faPlayCircle} />
              <div className='progressIndicator'></div>
              <FontAwesomeIcon icon={faVolumeUp} />
              <div className='progressIndicator volumeIndicator'></div>
            </div>
          </div>
        </li>

        </ul>
        <a href="" className='baseButton'>See more</a>
      </section>

      <footer className='flexSection spaceBetween'>
        <a href=""><h2>see all podcasts</h2></a>
        <div className='socials'>
          <FontAwesomeIcon icon={faInstagramSquare} />
          <FontAwesomeIcon icon={faFacebookSquare} />
          <FontAwesomeIcon icon={faTwitterSquare} />
          <FontAwesomeIcon icon={faYoutubeSquare} />
        </div>
        
      </footer>
    </div>
  );
}

export default Home;