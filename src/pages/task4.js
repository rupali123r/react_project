
import React, { useState } from "react";

function Convert() {
  const [hours, setHours] = useState('');

  function handleChange(e) {
    setHours(e.target.value);
  }

  function convert(hours) {
    return (hours * 60).toFixed(2);
  }

  return (
    <center>
      <input type="text" value={hours} onChange={handleChange} />
      <h3>
        {hours} hours is {convert(hours)} mintues
      </h3>
      <hr></hr>
    </center>
  );
}
export default Convert;
