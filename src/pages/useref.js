
import { useRef, useState} from "react";
function Useref( ) {

  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('') 
  const [name, setname] = useState('') 
 

 const x = useRef();
 const alpha = useRef();
 const y = useRef();
 const beta = useRef();
 const z = useRef();
 const veta = useRef();

  

  function abc() {
    x.current.style.background = "red";
    alpha.current.style.display = "block"
    alpha.current.style.color ="red"
    beta.current.style.display = "block"
    y.current.style.background = "red";
 beta.current.style.color ="red"
 veta.current.style.color ="red"
 veta.current.style.display = "block"   
 z.current.style.background = "red";


    if(name.length == 0){
      x.current.style.background = "red";
      alpha.current.style.display = "block"
      alpha.current.style.color ="red"

    }

  //  else if(name.length > 0 ){
  //     x.current.style.background = "white";
  //     alpha.current.style.display = "none"
     
  //     // alert("hello" )
  //   }

   else if (email.length == 0){
    
     beta.current.style.display = "block"
     y.current.style.background = "red";
  beta.current.style.color ="red"
    }

    // else if(email.length > 0){
    //   beta.current.style.display = "none"
    //  y.current.style.background = "white";
 
    // }

    else if  (password.length < 8) {
   

    veta.current.style.color ="red"
    veta.current.style.display = "block"  
    z.current.style.background = "red";
  }
  
  // else if(password.length < 8){
 
  //   veta.current.style.display = "none"
       
  //   z.current.style.background = "none";
  // }
  else{
    x.current.style.background = "none";
    alpha.current.style.display = "none"
    beta.current.style.display = "none"
     y.current.style.background = "none";
    veta.current.style.display = "none"   
    z.current.style.background = "none";
  }

  }

   return (
    <center>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
<h1>this is Blog page  </h1>
    
      <input ref={x} type="text" placeholder="enter fullname name" onChange={(e) => setname(e.target.value)}></input><br></br>
      <p ref={alpha} style={{display:"none"}}>Please Enter fullname</p>
      <input ref={y} type="text" placeholder="enter email id"  onChange={(e) => setEmail(e.target.value)} ></input><br></br>
      <p ref={beta} style={{display:"none"}}>Please Enter Email Id</p>

      <input ref={z} type="text" placeholder="enter password"   onChange={(e) => setPassword(e.target.value)}></input><br></br>
      <p ref={veta} style={{display:"none"}}>  Password minimum 8 characters maximum 16 characters</p>
     
      <button onClick={abc}>Click here</button>
    </center>
    );
  }
  
  export default Useref;