
import React, { useState, useContext } from 'react';
import axios from "axios";



function Contact() {
    console.log("navigator", navigator)

    const [fullName, setFullName] = useState();
    const [emailid, setemailid] = useState();
    const [contact, setContact] = useState();
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();
    const [data, setdata] = useState('');

    function myName(e) {
        setFullName(e.target.value);
    }

    function alpha(e) {
        setemailid(e.target.value);
    }


    function contactUs(e) {
        setContact(e.target.value);
    }


    function subjectUs(e) {
        setSubject(e.target.value);
    }


    function messageUs(e) {
        setMessage(e.target.value);
    }


    function alpha(e) {
        setemailid(e.target.value);
    }

    async function ContactData() {
        try {
            const userData = {
                fullname: fullName,
                emailid: emailid,
                mobileno: contact,
                subject: subject,
                message: message

            };

            const response = await axios.post('https://bhopal.city/api/web/v1/contact-us.php', userData);
            //  alert(JSON.stringify(response.data));
            setdata(response.data);

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>

            <div className='container-fluid   pt-4 pb-4'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-9 bg-white'>
                            <div className="contact-form bg-white p-4">
                                <h3>Contact Us </h3>
                                <p>For Any Query, Feel Free To Contact Us Anytime</p>
                                <form>
                                    <div class="mb-3">
                                        <div className="col-lg-12">
                                            <div class="form-group">
                                                <label class="form-label">Enter Full Name</label>
                                                <div class="texticon">
                                                    <input type="text" onChange={myName} value={fullName} class="form-control" placeholder="Enter fullName" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div class="form-group">
                                                <label class="form-label">Enter Emailid</label>
                                                <div class="texticon">
                                                    <input type="text" onChange={alpha} value={emailid} class="form-control" placeholder="Enter emailid" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div class="form-group">
                                                <label class="form-label">contact no.</label>
                                                <div class="texticon">
                                                    <input type="text" onChange={contactUs} value={contact} class="form-control" placeholder="Enter contact" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div class="col-12 col-md-12">
                                                <div class="form-group">
                                                    <label class="form-label">Enter subject</label>
                                                    <div class="texticon">
                                                        <input type="text" onChange={subjectUs} value={subject} class="form-control" placeholder="Enter subject" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <div class="form-group">
                                                <label class="form-label">Enter Message</label>
                                                <div class="texticon">
                                                    <textarea name="aboutus" class="form-control" onChange={messageUs} value={message} style={{ height: "150px" }}></textarea>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    {data.status == 201 &&
                                        <div className='alert alert-error alert-dismissable'>{data.message}</div>
                                    }
                                    {data.status == 200 &&
                                        <div className='alert alert-success alert-dismissable'>{data.message} This is success</div>
                                    }
                                    <button type="button" onClick={ContactData} className=" form-btn">Submit</button>
                                </form>
                            </div>
                        </div>
                        <div className='col-lg-3'></div>
                    </div>
                </div>
            </div>



        </>

    );
}

export default Contact;