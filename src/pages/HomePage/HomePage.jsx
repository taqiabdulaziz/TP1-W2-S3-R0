import React from 'react';
import './HomePage.css'
import HomePageConstants from './HomePageConstants';

const HomePage = () => {
  return (
    <div className='home-page'>
      <div className='introduction'>
        <h1 class="display-3">
          <strong style={{ color: '#743cf9' }}>Hi, I'm <br></br>Muhammad Taqi</strong>
        </h1>
        <h3>Software Engineer at <a href='https://jago.com/' style={{ color: '#feb12d' }}>Jago</a></h3>
        <div className='socials'>
          {HomePageConstants.socials.map((social) => (
            <a href={social.href}>
              <img src={social.src} className='social-icon' />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage;