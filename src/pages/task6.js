import React, { useState } from 'react';

function TemperatureConverter() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (value) => {
    const converted = (value * 9/5) + 32;
    setFahrenheit(converted || '');
  };

  return (
    <center>
         <br></br>
        <br></br>
      <label>
        Celsius:
        <input
          type="number"
          value={celsius}
          onChange={(e) => setCelsius(e.target.value)}
          onBlur={(e) => handleCelsiusChange(e.target.value)}
        />
      </label>
      <label>
        <br></br>
        <br></br>
        Fahrenheit:
        <input
          type="number"
          value={fahrenheit}
          onChange={(e) => setFahrenheit(e.target.value)}
          onBlur={(e) => {
            const converted = (e.target.value - 32) * 5/9;
            setCelsius(converted || '');
          }}
        />
      </label>
    </center>
  );
}

export default TemperatureConverter;
