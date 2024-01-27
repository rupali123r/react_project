
import React, { useState } from "react";

function Meter() {
  const [meter, setHours] = useState('');

  function handleChange(e) {
    setHours(e.target.value);
  }

  function convert(meter) {
    return (meter * 100).toFixed(2);
  }

  return (
    <center>
        <hr></hr>
        <br></br>
      <input type="text" value={meter} onChange={handleChange} />
      <h3>
        {meter} Meter is {convert(meter)} cm
      </h3>
      <hr></hr>
    </center>
  );
}
export default Meter;
