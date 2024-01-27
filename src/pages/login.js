import { useRef, useState, useEffect } from "react";
import axios from "axios";


function Login() {

  const mail = useRef();
  const pass = useRef();
  const input = useRef();
  const input1 = useRef();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [data, setdata] = useState('')
  const [access_token, setaccess_token] = useState('')

  function ValidateForm1() {


    mail.current.style.display = "block"
    mail.current.classList.add("error");
    input.current.classList.add("inputForm")
    //===========//
    pass.current.classList.add("error");
    input1.current.classList.add("inputForm")
    pass.current.style.display = "block"

    if (email.length == 0) {
      mail.current.style.display = "block"
      mail.current.classList.add("error1")
      input.current.classList.add("inputForm")

    } else if (password.length < 5) {

      mail.current.style.display = "none"
      mail.current.classList.remove("error1");
      input.current.classList.remove("inputForm")
      //===========//
      pass.current.classList.add("error");
      input1.current.classList.add("inputForm")
      pass.current.style.display = "block"


    } else {
      mail.current.style.display = "none"
      input.current.classList.remove("inputForm")
      pass.current.style.display = "none"
      input1.current.classList.remove("inputForm")


      async function LoginData() {

        // alert(state.emailid);

        try {
          const userData = {
            emailid: email,
            password: password,
          };

          const response = await axios.post('https://bhopal.city/api/web/v1/login.php', userData);

          // alert(JSON.stringify(response.data));
          setdata(response.data);
          setaccess_token(response.data.access_token);
          //console.log("access",response.data.access_token);
          return response.data.access_token;

          //  alert("sccuss")

        } catch (error) {
          console.error(error);
        }

      }

      LoginData().then(e => localStorage.setItem("access_token", e))

    }

  }

  return (
    <>

      <div className="container-fluid mt-5">

        <div className="container ">
          <div className="row">
            <div className="col-lg-6">
              <div className="bg-image mt-3">
                <img src="login-bg.png" />
              </div>
            </div>

            <div className="col-lg-6">
              <form className="bg-white  p-5">
                <h2>Welcome Back :</h2>
                <p>Log in with your email id and password that you entered during your registeration:</p>
                <div className="col-lg-12">
                  <div class="form-group mt-3">
                    <label class="form-label">Enter Emailid</label>
                    <div class="texticon">
                      <input type="text" ref={input} class="form-control" placeholder="Enter emailid" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                  </div>

                  <div className="error" style={{ display: "none" }} ref={mail}>
                    Invalid Form, Email Address can not be empty
                  </div>
                </div>

                <div className="col-lg-12">
                  <div class="form-group mt-3">
                    <label class="form-label">Enter Password</label>
                    <div class="texticon">
                      <input type="Password" ref={input1} class="form-control" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                  </div>
                </div>
                {/* {access_token} */}
                {data.status == 201 &&
                  <div className='alert alert-error alert-dismissable'>{data.message}</div>
                }
                
                {data.status == 200 &&
                  <div className=' alert-success '>
                    {data.message} This is success</div>
                }

                <div className="error1" ref={pass} style={{ display: "none" }} >
                  Invalid Form, Password minimum 8 characters maximum 16 characters
                </div>
                <button type="button" className=" mt-3 p-1 form-btn" onClick={ValidateForm1}>Submit</button>
              </form>

            </div>

          </div>
        </div>

      </div >




    </>

  );
}

export default Login;