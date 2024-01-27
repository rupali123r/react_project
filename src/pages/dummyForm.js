
import { useRef } from "react";
function Blog( ) {

 const fullname =  localStorage.getItem("fullname")
 const x = useRef();
  const y = useRef();

  function abc() {
    x.current.style.color = "red";
    x.current.style.background = "blue";
    x.current.style.fontSize = "32px";
    // x.current.style.display = "none";
  }

  function openpopup() {
    y.current.style.display = "block";
  }

  function closepoup() {
    y.current.style.display = "none";
  }
 
    return (
    <>
<h1>this is Blog page {fullname} </h1>
    


      <input ref={x} type="text"></input>
      <button onClick={abc}>Click here</button>
      <button onClick={openpopup}>Open Ppup</button>
      <div ref={y}>
        This is popup
        <button onClick={closepoup}>close</button>
      </div>

    </>
  
    );
  }
  
  export default Blog;