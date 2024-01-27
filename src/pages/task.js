
import { useState } from "react"

function Task() {
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState('');

  const checkNumber = () => {
    if (Number.isInteger(number)) {
      if (number > 0) {
        setResult('Positive Number');
      } else if (number < 0) {
        setResult('Negative Number');
      } else {
        setResult('Zero');
      }
    } else {
      setResult('Not an number');
    }
  };

  return (
    <center>
         <hr></hr>
    <div className='container'>
      <h3>React Js Check Positive/Negative Number Check</h3>
      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={checkNumber}>Check</button>
      <h1>{result}</h1>
    </div>
    <hr></hr>
    </center>
  );
}


export default Task;