import React from "react";
import "./FieldInfo.css";

const FieldInfo = () => {
  return (
    <div className="input-container">
        <h1>Mayer Check</h1>
        <p style={{fontSize: 16}}>Get full info about any person you want</p>
      <input type="text" className="input-field" placeholder="Enter the ID of the person you've looking for..."/>
      <button className="input-button">Get person</button>
    </div>
  );
};

export default FieldInfo;
