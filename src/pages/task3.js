
import React, { useState } from "react";

function Converter() {
  const [km, setKm] = useState(0);

  function handleChange(e) {
    setKm(e.target.value);
  }

  function convert(km) {
    return (km / 1.6).toFixed(2);
  }

  return (
    <center>
      <input type="text" value={km} onChange={handleChange} />
      <h3>
        {km} km is {convert(km)} miles
      </h3>
      <hr></hr>
    </center>
  );
}
export default Converter;
