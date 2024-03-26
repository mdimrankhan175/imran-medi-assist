import React from 'react';
import './index.css'; // Import CSS for styling

const Eligibility = () => {
  return (
    <div className="eligibility-container">
      <h2 className="heading3">ACCA Eligibility</h2>
      <div className="content">
        <div className="left">
          <h3>To appear for the ACCA Course examination a candidate should have:</h3>
          <ul>
            <li><span>&#10004;</span> Qualified the 10+2 exams</li>
            <li><span>&#10004;</span> An aggregate of 65%.</li>
            <li><span>&#10004;</span> Others can still register for the ACCA course with Foundation in Accountancy (FIA)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Eligibility;
