import { useState } from "react";

function DummyList() {


  const [firstName, setFirstName] = useState("rohit");
  const [lastname, setLastName] = useState("sharma");
  const [email, yourEmail] = useState("sharma@gmail.com");
  const [mobileNo, setMobile] = useState("87776876");
  const [password,setPasswore] = useState("6uvhjyg");
  const [textarea, setTextArea] = useState("bfhjbncgdd");
  

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handlelastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleEmailNameChange(e) {
    yourEmail(e.target.value);
  }

  function handlelastMobileChange(e) {
    setMobile(e.target.value);
  }

  function handlelastPasswordChange(e) {
    setPasswore(e.target.value);
  }

  function handleFirstTextAreaChange(e) {
    setTextArea(e.target.value);
  }

  function hello() {
    if (firstName == '') {
      alert('please enter first name');
    }
   else if (lastname == '') {
      alert('please enter Last name');
    }
  else  if ( email == '') {
      alert('please enter email');
    }
  else  if (password == '') {
      alert('please enter password');
    }
  else  if (mobileNo == '') {
      alert('please enter mobileNo');
    }
   else if (textarea == '') {
      alert('please enter some text in textarea');
    }

    else{
      alert("submitted")
    }
   
  }

  return (
    <>

      <div className="container-fluid mt-5 p-5 bg-white">

        <div className="container">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">

              <div className="col-lg-12 mt-3">
                <label for="exampleInputEmail1" class="form-label">Enter your fullname</label><br></br>
                <input type="text" name="firstName" onChange={handleFirstNameChange} value={firstName}></input>
              </div>

              <div className="col-lg-12 mt-3">
                <label for="exampleInputEmail1" class="form-label">Enter your Lastname</label><br></br>
                <input type="text" name="lastname" onChange={handlelastNameChange} value={lastname}></input>
              </div>

              <div className="col-lg-12 mt-3">
                <label for="exampleInputEmail1" class="form-label">Enter your Email</label><br></br>
                <input type="email" name="email" onChange={handleEmailNameChange} value={email}></input>
              </div>

              <div className="col-lg-12 mt-3">
                <label for="exampleInputEmail1" class="form-label">Enter your Password</label><br></br>
                <input type="password" name="password" onChange={handlelastPasswordChange} value={password}></input>
              </div>

              <div className="col-lg-12 mt-3">
                <label for="exampleInputEmail1" class="form-label">Enter your  Mobile no.</label><br></br>
                <input type="text" name="mobileNo" onChange={handlelastMobileChange} value={mobileNo}></input>
              </div>

             

              <div className="col-lg-12 mt-3">
          
                <label for="exampleInputEmail1" class="form-label"><b>Enter Message</b></label>
                <br></br>
               <textarea class="form-control" name="textarea" onChange={handleFirstTextAreaChange} value={textarea} style={{ height: "50px" }} placeholder="Enter Message" name="message" />

              </div>

              <button type="button" className="mt-4 p-1 btn btn-success" onClick={hello}>Click Here</button>

              {/* {firstName} */}
              {/* {lastname} */}

            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </div>

    </>

  );
}
export default DummyList;