import React, { useState } from 'react';

const Exercises = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
      };

  return (
    <>
        <div>Exercises</div>
        <div className='input-box'>
            <input placeholder="What's your current height?"></input>
            <input placeholder="What's your current weight?"></input>
        <label>
            What are your fitness goals?
                <select value={selectedOption} onChange={handleChange}>
                    <option value="">Select an option:</option>
                    <option value="Lose weight">Lose weight</option>
                    <option value="Gain muscle mass">Gain muscle mass</option>
                    <option value="Build cardiovascular fitness">Build cardiovascular fitness</option>
            </select>
        </label>
        </div>
    </>
  )
}

export default Exercises