import Dashbord from "./dashbord";
import { userContext, myData } from "./useContext";
import React, { useState, useRef } from "react";
import axios from "axios";

function ChangePassword() {
    const [password, setpassword] = useState('')
    const [repass, setrepass] = useState('')
    const [data, setdata] = useState('')
    const  alpha = useRef();
    const beta = useRef();
    const input = useRef();

    function Re_EnterPass() {

        if (password.length < 5 ) {

            beta.current.style.display = "block"
            beta.current.classList.add("error1");
            input.current.classList.add("inputForm")

        } else if (repass != password || password.length == 0) {
           
            alpha.current.classList.add("error3")
            input.current.classList.add("inputForm")
           alpha.current.style.display = "block"
        } else {

            alpha.current.style.display = "none"
          alpha.current.classList.remove("error3");
            input.current.classList.remove("inputForm")
            // ========
            beta.current.style.display = "none"
          beta.current.classList.remove("error3");
            input.current.classList.remove("inputForm")



            async function updatepassword() {
                // alert(state.emailid);
                try {
                    const passwordData = {
                        accesstoken: myData.access_token,
                        action: 'mypassword',
                        password: password,
                        repassword: repass

                    };

                    
                    // console.log("update", passwordData)

                    const response = await axios.post('https://bhopal.city/api/web/v1/my-profile-update.php', passwordData);
                    console.log(JSON.stringify(response.data));
                    setdata(response.data);


                    // console.log(password, "mypass")
                    // console.log(repass, "repass")
                } catch (error) {
                    console.error(error);
                }

            }
            updatepassword();

        }
    }





    return (

        <>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <Dashbord />
                        </div>
                        <div className="col-lg-8">
                            {/* {myData} */}
                            <div className="password bg-white mt-3">
                                <form className="  p-4">
                                    <h2>Change password</h2>

                                    <div className="col-lg-12">
                                        <div class="form-group mt-3">
                                            <label class="form-label">New password</label>
                                            <div class="texticon">
                                                <input type="text" ref={input} class="form-control" value={password} onChange={(e) => setpassword(e.target.value)} placeholder="Enter New password" />
                                                <div style={{ display: "none" }} ref={beta}>
                                                        Invalid Form, Password minimum 8 characters maximum 16 characters
                                                    </div>
                                            </div>
                                        </div>


                                    </div>

                                    <div className="col-lg-12">
                                        <div class="form-group mt-3">
                                            <label class="form-label">Re-enter new password</label>
                                            <div class="texticon">
                                                <input type="Password" ref={input} value={repass} onChange={(e) => setrepass(e.target.value)} class="form-control" placeholder="Re-enter new password" />
                                                <div style={{ display: "none" }} ref={alpha}>
                                                        Invalid Form, Please re-enter password
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* {access_token} */}

                                    {data.status == 201 &&
                                        <div className='alert alert-error alert-dismissable'>{data.message}</div>
                                    }
                                    {data.status == 200 &&
                                        <div className='alert alert-success alert-dismissable'>
                                            {data.message} This is success</div>}

                                    <button type="button" onClick={Re_EnterPass} className=" mt-3 p-1 form-btn" >Submit</button>
                                </form>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default ChangePassword;