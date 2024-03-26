import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faUsers, faBriefcase, faBook, faCalendarAlt, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import './index.css'; // Import CSS for styling

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      <h2 className="heading2">Why Choose Us?</h2>
      <hr className='hr'></hr>
      
      <div className="why-choose-container">
        <div className="box1">
          <FontAwesomeIcon className="icon" icon={faLightbulb} />
          <div className="name">Innovative Learning</div>
          <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>
        <div className="box1">
          <FontAwesomeIcon className="icon" icon={faUsers} />
          <div className="name">Experienced Professionals</div>
          <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>
        <div className="box1">
          <FontAwesomeIcon className="icon" icon={faBriefcase} />
          <div className="name">Guaranteed Placements</div>
          <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>
      </div>
      <div className="why-choose-container">
        <div className="box2">
        <h1 className="name">Levels</h1>
            <div className='box3'>
                 <FontAwesomeIcon className="icon" icon={faBook} />
                 <p className="description">Three (13 papers)</p>
            </div>  
        </div>
        <div className="box2">
        <h1 className="name">Duration</h1>
            <div className='box3'>
                 <FontAwesomeIcon className="icon" icon={faCalendarAlt} />
                 <p className="description">6-30 months</p>
            </div>  
        </div>
        <div className="box2">
        <h1 className="name">Exams</h1>
            <div className='box3'>
                 <FontAwesomeIcon className="icon" icon={faCalendarAlt} />
                 <p className="description">Quarterly (Online)</p>
            </div>  
        </div>
        <div className="box2">
        <h1 className="name">Exemptions</h1>
            <div className='box3'>
                 <FontAwesomeIcon className="icon" icon={faClipboardCheck} />
                 <p className="description">Upto 9 Papers</p>
            </div>  
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
