import { useRef, useState } from "react";
import axios from "axios";

function Register() {



    const fname = useRef()
    const emailRef = useRef()
    const passRef = useRef()
    const repassRef = useRef()
    const inputRef = useRef()
    const inputRef1 = useRef()
    const inputRef2 = useRef()
    const inputRef3 = useRef()
    const inputRef4 = useRef()
    const contactRef = useRef()



    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [data, setdata] = useState('')

    function validateForm(e) {
        e.preventDefault()
        var x = 0;

        //=====///
        fname.current.classList.add("error2");
        inputRef.current.classList.add("inputForm")
        fname.current.style.display = "block"
        ///=======
        emailRef.current.classList.add("error")
        inputRef1.current.classList.add("inputForm")
        emailRef.current.style.display = "block"
        //======
        passRef.current.style.display = "block"
        passRef.current.classList.add("error1")
        inputRef2.current.classList.add("inputForm")
        //============
        repassRef.current.classList.add("error3")
        inputRef3.current.classList.add("inputForm")
        repassRef.current.style.display = "block"
        //=======
        contactRef.current.classList.add("error4");
        inputRef4.current.classList.add("inputForm")
        contactRef.current.style.display = "block"

        if (firstName.length == 0) {
            x = 1
            // alert('Invalid Form, First Name can not be empty')
            //    fname.current.style.color = "red";
            fname.current.classList.add("error2");
            inputRef.current.classList.add("inputForm")
            fname.current.style.display = "block"
            //  alert('123');

        }
        else {
            x = 0
            fname.current.style.display = "none"
            fname.current.classList.remove("error2")
            inputRef.current.classList.remove("inputForm")
        }


        if (email.length == 0) {
            x = 1

            // alert('Invalid Form, Email Address can not be empty')
            emailRef.current.classList.add("error")
            inputRef1.current.classList.add("inputForm")
            emailRef.current.style.display = "block"
        }

        else {
            x = 0
            emailRef.current.style.display = "none"
            emailRef.current.classList.remove("error")
            inputRef1.current.classList.remove("inputForm")
        }

        if (password.length < 8) {
            x = 1
            // alert(
            //   'Invalid Form, Password minimum 8 characters maximum 16 characters',
            // )
            passRef.current.style.display = "block"
            passRef.current.classList.add("error1")
            inputRef2.current.classList.add("inputForm")
        }

        else {
            x = 0
            passRef.current.style.display = "none"
            passRef.current.classList.remove("error1")
            inputRef2.current.classList.remove("inputForm")
        }
        if (rePassword != password || rePassword.length == 0) {
            x = 1;
            //   alert(       'Invalid Form, Please re-enter password',    )
            repassRef.current.classList.add("error3")
            inputRef3.current.classList.add("inputForm")
            repassRef.current.style.display = "block"
        } else {
            x = 0;
            repassRef.current.style.display = "none"
            repassRef.current.classList.remove("error3");
            inputRef3.current.classList.remove("inputForm")
        }


        if (mobile.length < 10) {
            x = 1
            // alert('Invalid Form, please enter 10 digit')
            contactRef.current.classList.add("error4");
            inputRef4.current.classList.add("inputForm")
            contactRef.current.style.display = "block"
        } else {
            x = 0
            inputRef4.current.classList.remove("inputForm")
            contactRef.current.style.display = "none"
        }


        if (x == 0) {
            async function RegisterData() {
                // alert(state.emailid);

                try {
                    const userData = {
                        fullname: firstName,
                        emailid: email,
                        password: password,
                        reenterpass: rePassword,
                        mobileno: mobile
                    };

                    const response = await axios.post('https://bhopal.city/api/web/v1/register.php', userData);
                    // alert(JSON.stringify(response.data));
                    setdata(response.data);


                } catch (error) {
                    console.error(error);
                }

            }
            RegisterData();

        }


    }

    return (
        <>

            <div className='container-fluid  bg-white pt-4 pb-4'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-lg-2"></div>

                        <div className='col-lg-8'>

                            <div className="contact-form bg-white p-4">

                                <h5>Register your account</h5>
                                <p>Let's get you all set up so you can verify your personal account and begin setting up your profile.</p>


                                <div class="mb-3">


                                    <div class="col-12">
                                        <div class="form-group">
                                            <label class="form-label">Enter full Name</label>
                                            <div class="texticon">
                                                <input type="text" ref={inputRef} onChange={(e) => setFirstName(e.target.value)} class="form-control " placeholder="Enter Name" />
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ display: "none" }} ref={fname}>
                                        Invalid Form, Invalid Form, First Name can not be empty
                                    </div>
                                    <div className="col-lg-12">
                                        <div class="form-group">
                                            <label class="form-label">Enter Email Id</label>
                                            <div class="texticon">
                                                <input type="email" ref={inputRef1} class="form-control " placeholder="Enter  Email Id" onChange={(e) => setEmail(e.target.value)} />
                                            </div>
                                        </div>

                                    </div>

                                    <div style={{ display: "none" }} ref={emailRef} >
                                        Invalid Form, Email Address can not be empty
                                    </div>
                                    <div className="row">
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label class="form-label">Enter Password</label>
                                                <div class="texticon">
                                                    <input type="password" ref={inputRef2} onChange={(e) => setPassword(e.target.value)} class="form-control " />
                                                    <div style={{ display: "none" }} ref={passRef}>
                                                        Invalid Form, Password minimum 8 characters maximum 16 characters
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label class="form-label" >Re-Enter Password</label>
                                                <div class="texticon">
                                                    <input type="password" ref={inputRef3} onChange={(e) => setRePassword(e.target.value)} class="form-control " />
                                                    <div style={{ display: "none" }} ref={repassRef}>
                                                        Invalid Form, Please re-enter password
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                        <div class="col-12 col-md-12">
                                            <div class="form-group">
                                                <label class="form-label"> Contact No.</label>
                                                <div class="texticon">
                                                    <input type="number" ref={inputRef4} onChange={(e) => setMobile(e.target.value)} class="form-control " placeholder="Enter  Contact No." />
                                                </div>
                                                <div style={{ display: "none" }} ref={contactRef}>
                                                    Invalid Form, please enter 10 digit
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    {data.status == 201 &&
                                        <div className='alert alert-error alert-dismissable'>{data.message}</div>
                                    }
                                    {data.status == 200 &&
                                        <div className='alert alert-success alert-dismissable'>
                                            {data.message} This is success</div>}


                                </div>

                                <button type="button" onClick={validateForm} className=" p-1 form-btn">Register</button>
                            </div>
                        </div>

                        <div className="col-lg-2"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
