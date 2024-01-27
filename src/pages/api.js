import React, { useState, useEffect ,useContext,createContext} from 'react';


function Home1() {
localStorage.setItem("fullname", "rohit")
localStorage.setItem("lastname", "sharma")
localStorage.setItem("gender", "male")
localStorage.setItem("age", "24")


  const [user, setUser]= useState('0')
  const [fuser, fsetUser]= useState('0')

 function hello(){

    setUser("768")
  }
 const fullname =  localStorage.getItem("fullname")
  // localStorage.getItem("lastname")
  // localStorage.getItem("gender")
  // localStorage.getItem("age")
  
  

 function hello2(){

    fsetUser("5")
  }



  useEffect(()=>{
    alert("hello")
    console.log("run useffect")
  },[])
  
  useEffect(()=>{
    alert("hello")
    console.log("run useffect")
  },[user])


  useEffect(()=>{
    alert("hello ravendra")
    console.log("run useffect")
  })

  return (
    <>
      <h1>This is my Home.js Page
{fullname} </h1>

   {user}
   {fuser}
      <button onClick={hello}>Click here1</button>

      <button Click={hello2}>Click here</button>
    </>
  );
}
export default Home1;