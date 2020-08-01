import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function Donate(props) {
  
  return (
    <div className="linksPage page">
      <h1 className='title'>Helpful Links</h1>
      <div className="linksGrid">
        <div>
          <h2>Economy</h2>
          <a href=""><FontAwesomeIcon icon={faChevronDown} /></a>
        </div>
        
        <div>
          <h2>Economy</h2>
          <a href=""><FontAwesomeIcon icon={faChevronDown} /></a>
        </div>

        <div>
          <h2>Economy</h2>
          <a href=""><FontAwesomeIcon icon={faChevronDown} /></a>
        </div>

        <div>
          <h2>Economy</h2>
          <a href=""><FontAwesomeIcon icon={faChevronDown} /></a>
        </div>

        <div>
          <h2>Economy</h2>
          <a href=""><FontAwesomeIcon icon={faChevronDown} /></a>
        </div>

        <div>
          <h2>Economy</h2>
          <a href=""><FontAwesomeIcon icon={faChevronDown} /></a>
        </div>

        <div>
          <h2>Economy</h2>
          <a href=""><FontAwesomeIcon icon={faChevronDown} /></a>
        </div>

        <div>
          <h2>Economy</h2>
          <a href=""><FontAwesomeIcon icon={faChevronDown} /></a>
        </div>



      </div>
    </div>
  );
}

export default Donate;