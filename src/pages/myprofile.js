import Dashbord from "./dashbord";
import axios from "axios";
import React, { useEffect, useContext, useState, useRef, memo } from "react";
import { userContext, myData } from "./useContext";

function LoginForm() {

  const [Profile, setProfile] = useState("")
  const [fname, setfname] = useState("")
  const [city, setcity] = useState("")
  const [area, setarea] = useState("")


async function updateprofile() {
    // alert(state.emailid);
    try {
      const updateData = {
        accesstoken: myData.access_token,
        action: 'myprofile',
        fullname:fname,
        area:area,
        city:city
      };
      console.log("update",updateData)

      const response = await axios.post('https://bhopal.city/api/web/v1/my-profile-update.php', updateData);
      console.log(JSON.stringify(response.data));

    } catch (error) {
      console.error(error);
    }

  }
 
  async function fetchprofile() {
    // alert(state.emailid);
    try {
      const profileData = {
        accesstoken: myData.access_token,
        action: 'userprofile'
      };

      const response = await axios.post('https://bhopal.city/api/web/v1/my-profile-view.php', profileData);
      //console.log(JSON.stringify(response.data));
      // console.log(response.data);
      setProfile(response.data);
      setfname(response.data.fullname);
      setcity(response.data.city);
      setarea(response.data.area);

       console.log("area",response.data.area)

      // await localStorage.setItem("access_token",data.access_token);
      //  await setaccess_token(data.access_token);
      // console.log(access_token)

    } catch (error) {
      console.error(error);
    }

  }

  useEffect(() => {
    fetchprofile()
  }, []);

 
  const validatename = useRef();
  const input = useRef()
  
  function MyProfile() {
    
    console.log(fname)
    if (fname.length == 0) {
      validatename.current.classList.add("error");
      validatename.current.style.display = "block"
      input.current.classList.add("inputForm")
    } else {
      validatename.current.classList.remove("error");
      validatename.current.style.display= "none"
      input.current.classList.remove("inputForm")
      updateprofile();
     
    }

  }

 


  //console.log(myData)
  return (
    <>

      <div className='container-fluid mt-1bg-white pt-4 pb-4'>
        <div className='container'>
          <div className='row'>
            <div className="col-lg-4">
              <Dashbord />
            </div>
            <div className='col-lg-8'>
              <div className="contact-form bg-white p-4">

                <h4 className="form-heading mb-2">My Profile</h4>

                <form>
                  <div class="mb-3">
                    <div className="col-lg-12">
                      Email Id - {Profile.emailid}
                    </div>

                    <div className="col-lg-12"> Contact No. - {Profile.mobileno}</div>
                    <div className="col-lg-12">

                      <label for="exampleInputEmail1" class="form-label">Enter Fullname</label>

                      <input type="email" class="form-control" ref={input}  value={fname} onChange={(e) => setfname(e.target.value)} id="exampleInputEmail1" placeholder="Enter Fullname" aria-describedby="emailHelp" />

                      <div style={{ display: "none" }} ref={validatename}>
                        Invalid Form, Invalid Form, First Name can not be empty
                      </div>

                    </div>
                    <div className="col-lg-12">
                      <label for="exampleInputEmail1" class="form-label">Enter Area</label>
                      <input type="email" class="form-control" value={area} onChange={(e) => setarea(e.target.value)}  id="exampleInputEmail1" placeholder="Enter Area" aria-describedby="emailHelp" />
                    </div>
                    <div className="col-lg-12">
                      <label for="exampleInputEmail1" class="form-label">Enter City</label>
                      <input type="email" class="form-control" value={city} onChange={(e) => setcity(e.target.value)} placeholder="Enter City Name" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                  </div>

                  <button onClick={MyProfile} type="button" class=" form-btn">Submit</button>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>


    </>

  );
}

export default  LoginForm;