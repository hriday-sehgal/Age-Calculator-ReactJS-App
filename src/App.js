import React, { useState } from 'react';
import './App.css';

function App() {
  const [birthDate, setBirthDate] = useState('');
 
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const today = new Date();
    const birth = new Date(birthDate);
    const ageDiff = today - birth;
    const ageDate = new Date(ageDiff);
    const years = Math.abs(ageDate.getUTCFullYear() - 1970);

    setAge(years);
  }

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <div className="input-group">
        <label htmlFor="birthDate">Enter your date of birth </label><br></br>
        <input
          type="date"
          id="birthDate"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
      </div>
    
      <button className="calculate-button" onClick={calculateAge}>
        Calculate Age
      </button>
      {age && <p>You are {age} years old</p>}
    </div>
  );
}

export default App;
