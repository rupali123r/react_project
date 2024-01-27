import { BrowserRouter as Router, Link } from "react-router-dom";
import Dashbord from "./dashbord";
import { useEffect, useState, memo } from "react";
import { userContext, myData } from "./useContext";
import axios from "axios";


function Contact1() {
  //================ business update variable-----------------

  // business view api code

  const [businessDTL, setbusinessDTL] = useState('');

  useEffect(() => {
    BusinessView()
  }, [])

  async function BusinessView() {
    try {
      const BusinessViewData = {
        action: "step1",
        accesstoken: myData.access_token
      }

      //console.log("myData",myData);
      const response = await axios.post("https://bhopal.city/api/web/v1/my-business-view.php", BusinessViewData)
      // console.log("response", JSON.stringify(response.data));
      setbusinessDTL(response.data);

    } catch (error) {
      console.log(error)
    }
  }


  //------------------ business update api code-------------------//

  const [businessData, setbusinessData] = useState('');
  const [businessName, setbusinessName] = useState('');
  const [businessId, setbusinessId] = useState('');
  const [businessNo, setbusinessNo] = useState('');
  const [businessMsg, setbusinessMsg] = useState('');
  const [businessCat, setbusinessCat] = useState('');

  async function BusinessUpdate() {
    try {
      const BusinessUpdateData = {
        action: "step1",
        accesstoken: myData.access_token,
        mcid: businessCat,
        companyname: businessName,
        mobileno: businessNo,
        emailid: businessId,
        aboutus: businessMsg
      }


      const response = await axios.post("https://bhopal.city/api/web/v1/my-business-update.php", BusinessUpdateData);
      // console.log(JSON.stringify(response.data));
      setbusinessData(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className='container-fluid  bg-white pt-4 pb-4'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>

              <div className="contact-form bg-white p-4">

                <form>
                  <div class="mb-3">

                    {businessData.status == 201 &&
                      <div className='alert alert-error alert-dismissable'>{businessData.message}</div>
                    }
                    {businessData.status == 200 &&
                      <div className=' alert-success '>
                        {businessData.message} </div>
                    }
                    <div className="col-lg-12">
                      <label class="form-label">Select Service Provide</label>
                      <select class="form-control" onChange={(e) => setbusinessCat(e.target.value)} >
                        <option value='14'  > 18 selected</option>
                        <option value='14'  > Android App Development</option>
                        <option value='45'  > Best training and placement institutes</option>
                        <option value='25'  > Database Training</option>
                        <option value='22'  > Desktop Application</option>
                        <option value='48'  > Digital Marketing Training</option>
                        <option value='15'  > IOS App Development</option>
                        <option value='13'  > Mobile App Development</option>
                        <option value='19'  > Mobile Development Training</option>
                        <option value='23'  > Online Marketing</option>
                        <option value='21'  > Online Marketing Training</option>
                        <option value='20'  > Programming Languages Training</option>
                        <option value='17'  > SEO Service</option>
                        <option value='24'  > Social Media Marketing</option>
                        <option value='49'  > social media marketing training</option>
                        <option value='16'  > Software Development</option>
                        <option value='12'  > Web Design</option>
                        <option value='11'  > Web development</option>
                        <option value='18'  > Web Development Training</option>
                      </select>
                    </div>

                    <div class="col-12">
                      <div class="form-group">
                        <label class="form-label">Business Name  </label>
                        <div class="texticon">
                          <input type="text" value={businessDTL.companyname} name="companyname" onChange={(e) => setbusinessName(e.target.value)} class="form-control" placeholder="Enter Business Name" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div class="col-12 col-md-6">
                        <div class="form-group">
                          <label class="form-label">Business Email Id</label>
                          <div class="texticon">
                            <input type="text" value={businessDTL.emailid} name="emailid" onChange={(e) => setbusinessId(e.target.value)} class="form-control" placeholder="Enter Business Email Id" />
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <div class="form-group">
                          <label class="form-label">Business Contact No.</label>
                          <div class="texticon">
                            <input type="number" value={businessDTL.mobileno} name="mobileno" onChange={(e) => {
                              setbusinessNo(e.target.value)
                              if (e.target.value.length > 10) {
                                alert("error");
                              }

                            }} class="form-control" placeholder="Enter Business Contact No." />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-12">
                      <div class="form-group">
                        <label class="form-label">Business Detail</label>
                        <div class="texticon">
                          <textarea name="aboutus" value={businessDTL.aboutus} onChange={(e) => setbusinessMsg(e.target.value)} class="form-control" placeholder="Enter Business Detail" style={{ height: "150px" }}></textarea>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 mb-50">
                      <div id="errshow" class="mt-2"></div>
                      <input type="hidden" name="updaterecord" value="updaterecord" />
                    </div>

                  </div>



                  <button type="button" onClick={BusinessUpdate} className="mt-2 form-btn">Submit</button>
                  <button type="submit" className=" mt-2 form-btn ms-3">Back</button>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

function Contact2() { 
  return (
    <>

      <div className='container-fluid  bg-white pt-4 pb-4'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className="contact-form bg-white p-4">
                <form>
                  <div class="row mb-3">
                    <div className="col-lg-6">
                      <label for="exampleInputEmail1" class="form-label">Business Logo Image</label>
                      <input type="file" class="form-control" id="exampleInputEmail1" placeholder="Enter Fullname" aria-describedby="emailHelp" />
                      <img src="dezven-software-solution.webp" style={{ width: "auto", height: "80px", marginTop: "10px" }} />
                    </div>
                    <div className="col-lg-6 ">
                      <button className="form-btn-2 mt-5">Upload</button>
                    </div>
                    <div className="col-lg-6">
                      <label for="exampleInputEmail1" class="form-label">Background Image</label>
                      <input type="file" class="form-control" id="exampleInputEmail1" placeholder="Enter Fullname" aria-describedby="emailHelp" />
                      <img src="bg-dezven-software-solution.webp" style={{ width: "auto", height: "80px", marginTop: "20px" }} />
                    </div>
                    <div className="col-lg-6 ">
                      <button className="form-btn-2 mt-5">Upload</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

function Contact3() {

  // =====================business update step 3 variable===================//

  const [businessAdd, setbusinessAdd] = useState('')
  const [businessWts, setbusinessWts] = useState('')
  const [businessURL, setbusinessURL] = useState('')
  const [businessCode, setbusinessCode] = useState('')
  const [dataStep3, setdataStep3] = useState('')




  //================= business update step 3 api code================//
  async function BusinessUpdateStep3() {

    try {
      const BusinessDataStep3 = {
        action: "step3",
        accesstoken: myData.access_token,
        whatsapp: businessWts,
        address: businessAdd,
        pincode: businessCode,
        websiteurl: businessURL
      }


      const response = await axios.post("https://bhopal.city/api/web/v1/my-business-update.php", BusinessDataStep3);
      console.log("step3", JSON.stringify(response.data));
      setdataStep3(response.data);

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>

      <div className='container-fluid  bg-white pt-4 pb-4'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>

              <div className="contact-form bg-white p-4">



                <form>
                  <div class="mb-3">
                    {dataStep3.error == 201 &&
                      <div className='alert alert-error alert-dismissable'>{dataStep3.message}</div>
                    }
                    {dataStep3.error == 200 &&
                      <div className='alert-success'>
                        {dataStep3.message} This is success</div>
                    }
                    <div className="col-lg-12">
                      <label for="exampleInputEmail1" class="form-label">Business Address</label>
                      <textarea name="aboutus" onChange={(e) => setbusinessAdd(e.target.value)} class="form-control" placeholder="Enter Business Address" style={{ height: "150px" }}>

                      </textarea>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <label for="exampleInputEmail1" class="form-label">Whatsapp No.</label>
                        <input type="number" onChange={(e) => setbusinessWts(e.target.value)} class="form-control" id="exampleInputEmail1" placeholder="Enter number" aria-describedby="emailHelp" />
                      </div>
                      <div className="col-lg-6">
                        <label for="exampleInputEmail1" class="form-label">Business Website URL</label>
                        <input type="email" onChange={(e) => setbusinessURL(e.target.value)} class="form-control" placeholder="Enter Contact no." id="exampleInputEmail1" aria-describedby="emailHelp" />
                      </div>
                      <div className="col-lg-6">
                        <label for="exampleInputEmail1" class="form-label">Business Pin Code</label>
                        <input type="number" onChange={(e) => setbusinessCode(e.target.value)} class="form-control" placeholder="Enter Business Pin Code" id="exampleInputEmail1" aria-describedby="emailHelp" />
                      </div>
                    </div>



                  </div>

                  <button type="button" onClick={BusinessUpdateStep3} class=" form-btn">Submit</button>
                  <button type="submit" class=" form-btn ms-2">Back</button>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

function Contact4() {

  // my business update step 2 variable 

  const [whatsappNo, setwhatsappNo] = useState('');
  const [facebook, setfacebook] = useState('');
  const [twitter, settwitter] = useState('');
  const [linkedin, setlinkdin] = useState('');
  const [insta, setinsta] = useState('');
  const [youtube, setyoutube] = useState('');
  const [socialData, setsocialData] = useState('');


  // my business update step 2 api code
  async function BusinessUpdateStep4() {
    try {
      const BusinessDataStep4 = {
        action: "step4",
        accesstoken: myData.access_token,
        whatsapp: whatsappNo,
        facebookurl: facebook,
        twitterurl: twitter,
        linkedinurl: linkedin,
        instagramurl: insta,
        youtubeurl: youtube,

      }

      const response = await axios.post("https://bhopal.city/api/web/v1/my-business-update.php", BusinessDataStep4);
      console.log("step4", JSON.stringify(response.data));
      setsocialData(response.data);


    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className='container-fluid  bg-white pt-4 pb-4'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>

              <div className="contact-form bg-white p-4">



                <form>
                  <div class="mb-3">
                    {socialData.error == 201 &&
                      <div className='alert alert-error alert-dismissable'>{socialData.message}</div>
                    }
                    {socialData.error == 200 &&
                      <div className=' alert-success '>
                        {socialData.message} </div>
                    }

                    <div className="col-lg-12">
                      <label for="exampleInputEmail1" class="form-label">Whatsapp No.</label>
                      <input type="number" onChange={(e) => setwhatsappNo(e.target.value)} class="form-control" id="exampleInputEmail1" placeholder="Enter whatsapp" aria-describedby="emailHelp" />
                    </div>

                    <div className="row">
                      <div className="col-lg-6">
                        <label for="exampleInputEmail1" class="form-label">Facebook Page URL</label>
                        <input type="type" class="form-control" onChange={(e) => setfacebook(e.target.value)} id="exampleInputEmail1" placeholder="Enter facebookurl" aria-describedby="emailHelp" />
                      </div>
                      <div className="col-lg-6">
                        <label for="exampleInputEmail1" class="form-label">Twitter Page URL</label>
                        <input type="type" class="form-control" onChange={(e) => settwitter(e.target.value)} placeholder="Enter twitter url" id="exampleInputEmail1" aria-describedby="emailHelp" />
                      </div>
                      <div className="col-lg-6">
                        <label for="exampleInputEmail1" class="form-label">Linkedin Page URL</label>
                        <input type="type" class="form-control" onChange={(e) => setlinkdin(e.target.value)} placeholder="Enter linkdin url" id="exampleInputEmail1" aria-describedby="emailHelp" />
                      </div>
                      <div className="col-lg-6">
                        <label for="exampleInputEmail1" class="form-label">Instagram Page URL</label>
                        <input type="type" class="form-control" onChange={(e) => setinsta(e.target.value)} placeholder="Enter instagram page url" id="exampleInputEmail1" aria-describedby="emailHelp" />
                      </div>
                      <div className="col-lg-6">
                        <label for="exampleInputEmail1" class="form-label">Youtube Channel URL</label>
                        <input type="type" class="form-control" onChange={(e) => setyoutube(e.target.value)} placeholder="Enter youtube channel url" id="exampleInputEmail1" aria-describedby="emailHelp" />
                      </div>
                      <div className="col-lg-6">
                        <label for="exampleInputEmail1" class="form-label">Playstore App URL</label>
                        <input type="type" class="form-control" placeholder="Enter playstore app url" id="exampleInputEmail1" aria-describedby="emailHelp" />
                      </div>
                    </div>



                  </div>

                  <button type="button" onClick={BusinessUpdateStep4} class=" form-btn p-1">Submit</button>
                  <button type="submit" class=" form-btn ms-2 p-1">Back</button>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}








function Sidebar() {

  return (
    <>




      <div className='container-fluid mt-1bg-white pt-4 pb-4'>
        <div className='container'>
          <div className='row'>
            <div className="col-lg-4">
              <Dashbord />
            </div>
            <div className='col-lg-8'>
              <div className="main-box bg-white mt-3 p-3">
                <h3>Manage Business</h3>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">1. Manage Business
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
                      2. Business Image</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">3. Contact Info</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="contact1-tab" data-bs-toggle="tab" data-bs-target="#contact1-tab-pane" type="button" role="tab" aria-controls="contact1-tab-pane" aria-selected="false">4. Social Media</button>
                  </li>

                </ul>
                <div class="tab-content" id="myTabContent">
                  <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">  <Contact1 /></div>
                  <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">   <Contact2 /></div>
                  <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0"><Contact3 /></div>

                  <div class="tab-pane fade" id="contact1-tab-pane" role="tabpanel" aria-labelledby="contact1-tab" tabindex="0"><Contact4 /></div>

                </div>
              </div>
            </div>


          </div>
        </div>
      </div>






    </>
  );
}

export default memo = (Sidebar);










