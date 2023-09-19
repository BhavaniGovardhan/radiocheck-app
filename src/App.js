import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [gender, setGender] = React.useState();
const handleChange = e => {
  const target = e.target;
  if (target.checked) {
    setGender(target.value);
  }
};

function DisplayGender(){
  console.log("Gender :: ",gender);
}
  return (
    <div>
      <h1>Radio Value</h1>
      <input type='radio' name='gender' value={"Male"} onChange={handleChange} /> Male <br />
      <input type='radio' name='gender' value={"Female"} onChange={handleChange} /> Female <br />
      <button onClick={()=>{DisplayGender()}}>Select Gender</button>
    </div>
  );
}

export default App;
