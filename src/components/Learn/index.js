import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faUsers, faBriefcase, faBook, faCalendarAlt, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import './index.css'; // Import CSS for styling

const Learn = () => {
  return (
    <div className="why-choose-us">
      <h2 className="heading">What will you learn in ACCA ?</h2>
      <hr className='hr'></hr>
      <div className='learn-container'>
          <div className="learn-container2">
            <div class="top">
                <h3>Knowledge Level</h3>
            </div>
            <div class='center'>
            <ul >
                <li>Option1</li>
                <li>Option1</li>
            </ul>
            </div>
            <div class="bottom">
                <p>3 Papers</p>
            </div>
          </div>

          <div className="learn-container2">
        <div class="top">
            <h3>Skill Level</h3>
        </div>
        <div class='center'>
        <ul >
            <li>Option1</li>
            <li>Option1</li>
        </ul>
        </div>
        <div class="bottom">
            <p>6 Papers</p>
        </div>
      </div>
      
      <div className="learn-container2">
        <div class="top">
            <h3>Professional Level</h3>
        </div>
        <div class='center'>
        <ul >
            <li>Option1</li>
            <li>Option1</li>
        </ul>
        </div>
        <div class="bottom">
            <p>4 Papers</p>
        </div>
      </div>
      
        </div>
    </div>
  );
};

export default Learn;
