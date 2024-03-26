import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faBriefcase, faSuitcase, faBreadSlice } from '@fortawesome/free-solid-svg-icons';
import './index.css'; // Import CSS for styling

const Placement = () => {
  return (
    <div className="why-choose-us">
      <h2 className="heading2">100% Placement Assistance</h2>
      <hr className='hr'></hr>
      
      <div className="why-choose-container">
        <div className="box1">
          <FontAwesomeIcon className="icon" icon={faFileAlt} />
          <div className="name">Resume Building</div>
          <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>
        <div className="box1">
          <FontAwesomeIcon className="icon" icon={faBriefcase} />
          <div className="name">Career Counselling</div>
          <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>
        <div className="box1">
          <FontAwesomeIcon className="icon" icon={faSuitcase} />
          <div className="name">Jobs</div>
          <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>
      </div>
    </div>
  );
};

export default Placement;
