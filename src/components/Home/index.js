import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBook, faClock, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

import './index.css'

const Home = () => {
  // State for modal visibility
  const [showModal, setShowModal] = useState(false);

  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: ''
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform any necessary form submission logic
    setShowModal(true);
  };

  // Handle modal close
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    
    <div className="home-container py-4">
      <div className='description-container'>
        <h2>Become ACCA in 18 months</h2>
        <p>
        There are plenty of resources available to help you along the way, including study guides, online forums, and study groups. We at 1Fin by IndigoLearn focus on in depth conceptual clarity and examination succes.
        </p>
        
        <div className="count-container">
      <div className="box">
        <div className="icon">
          <FontAwesomeIcon icon={faUser} />
        </div>
           <p className="count">100 <br></br>Users </p>         
      </div>
      <div className="box">
        <div className="icon">
          <FontAwesomeIcon icon={faBook} />
        </div>
        <p className="count">50 <br></br>Courses </p>
      </div>
      <div className="box">
        <div className="icon">
          <FontAwesomeIcon icon={faClock} />
        </div>
        <p className="count">500 <br></br>Minutes Watched </p>
        </div>
      <div className="box">
        <div className="icon">
          <FontAwesomeIcon icon={faChalkboardTeacher} />
        </div>
        <p className="count">10 <br></br>Faculty </p>
        </div>
    </div>

        <div>
            <Button className='download-button' variant="primary mr-3">Download</Button>
            <Button className='learn-button' variant="success">Learning</Button>
        </div>
       </div>
      <div className="form-container mt-4">
        <h3>Aspiring to be an ACCA?</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              className="form-control"
              placeholder="Mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              required
            />
          </div>
          <Button className='button' type="submit" variant="primary">Request Callback</Button>
        </form>
      </div>
      <Modal  show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your form has been submitted successfully! We will contact you soon.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Home;
