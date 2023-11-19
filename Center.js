import React from 'react';
import './Center.css'; // Import your CSS file

const Center = () => {
  return (
   <>
    <div className="centered-container">
      <div className="top-row">
        <button className="left-button">order now</button>
        <button className="right-button">demo drive</button>
      </div>
      <div className="bottom-paragraph">
        <p id='fixedparagraph'>*Excludes taxes and fees with price subject to change. Available in select states. See Details</p>
      </div>
    </div>
   
   </>
  );
};

export default Center;
