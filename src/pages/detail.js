import { BrowserRouter as Router, Link, useParams, json } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { AiOutlineMessage } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { FaInbox } from "react-icons/fa6";

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

function Detail() {

  useEffect(() => {
    fetchCompanyDetail()
  }, [])


  // company-detail  variable
  const [company, setcompany] = useState([]);
  const [faq, setfaq] = useState([]);
  const [rating, setrating] = useState([]);
  const [companyList, setcompanyList] = useState([]);


  // company enquiry variable
  const [companyEnquiry, setcompanyEnquiry] = useState();
  const [enquiryName, setenquiryName] = useState('');
  const [enquiryNo, setenquiryNo] = useState('');
  const [enquiryMsg, setenquiryMsg] = useState('')
  const [data, setdata] = useState('');

  //company-enquiry  useRef variable
  const enquiryInput = useRef();
  const enquiryInput1 = useRef();
  const enquiryInput2 = useRef();
  const nameRef = useRef();
  const mobileRef = useRef();
  const msgRef = useRef();


  // company-rating variable
  const [starRating, setstarRating] = useState(0);
  const [ratingName, setratingName] = useState('');
  const [ratingNo, setratingNo] = useState('');
  const [ratingMsg, setratingMsg] = useState('');
  const [ratingData, setratingData] = useState('');
  // const [ratingValue, setratingValue] = useState('');

  // company-rating useref variable
  const { ratingNameRef } = useRef();
  const { ratingNoRef } = useRef();
  const { ratingCommentRef } = useRef();
  const { ratingInput } = useRef();
  const { ratingInput1 } = useRef();
  const { ratingInput2 } = useRef();


  const { pageurl } = useParams()


  // company- detail api code

  async function fetchCompanyDetail() {

    try {
      const companyData = {
        pageurl: pageurl

      };


      const response = await axios.post('https://bhopal.city/api/web/v1/company-detail.php', companyData);
      //  console.log(JSON.stringify(response.data.company));

      setcompany(response.data.company);
      setfaq(response.data.faq);
      setcompanyList(response.data.companylist);
      setrating(response.data.rating);

      // ======
      // console.log("company", response.data.company)
      //  console.log("rating", response.data.rating)
      //  console.log("companylist", response.data.companylist)
      // console.log("faq", response.data.faq)


    } catch (error) {
      console.error(error);
    }

  }

  // company enquiry form validation condition

  function enquiryValidate(e) {
    e.preventDefault()
    var y = 0;
    msgRef.current.classList.add("error2");
    enquiryInput2.current.classList.add("inputForm")
    msgRef.current.style.display = "block"



    if (enquiryName.length == 0) {
      y = 1;
      nameRef.current.classList.add("error");
      enquiryInput.current.classList.add("inputForm");
      // nameRef.current.style.display = "block"
    } else {
      y = 0;
      nameRef.current.classList.remove("error")
      enquiryInput.current.classList.remove("inputForm")
      nameRef.current.style.display = "none"
    }

    if (enquiryNo.length != 10) {
      y = 1;
      mobileRef.current.classList.add("error1")
      enquiryInput1.current.classList.add("inputForm")
      // mobileRef.current.style.display = "block"

    } else {
      y = 0;
      mobileRef.current.classList.remove("error1")
      enquiryInput1.current.classList.remove("inputForm")
      mobileRef.current.style.display = "none"

    }

    if (msgRef.length == 0) {
      y = 1;
      msgRef.current.classList.add("error")
      enquiryInput2.classList.add("inputForm")
      // msgRef.current.style.display = "block"

    }

    if (y == 0) {

      enquiryInput2.current.classList.remove("inputForm")
      msgRef.current.classList.remove("error")
      msgRef.current.style.display = "none"

      //company enquiry api code

      async function fetchCompanyEnquiry() {

        try {
          const companyEnquiryData = {
            company_token: company.token,
            fullname: enquiryName,
            mobileno: enquiryNo,
            message: enquiryMsg
          };

          // console.log("name", enquiryName)
          const response = await axios.post('https://bhopal.city/api/web/v1/company-enquiry.php', companyEnquiryData);
          // console.log(JSON.stringify(response.data));
          setcompanyEnquiry(response.data)
          setdata(response.data)


        } catch (error) {
          console.error(error);
        }

      }

      fetchCompanyEnquiry();
    }

  }


  // company rating form validation

  async function companyRating() {


    //  var form = document.getElementById("ratfrm");
    // alert(form.elements['rating'].value);
    // setratingValue(document.querySelector('input[name = rating]:checked').value);
    // console.log("rating", ratingValue);

    try {

      const companyRatingData = {
        company_token: company.token,
        fullname: ratingName,
        mobileno: ratingNo,
        comment: ratingMsg,
        rating: starRating
      };
      // console.log("name", ratingName, "no.", ratingNo, "comment", ratingMsg, "rating", starRating)
      const response = await axios.post("https://bhopal.city/api/web/v1/company-rating.php", companyRatingData)
      //  console.log(JSON.stringify(response.data));
      setratingData(response.data);
      // console.log("ratingdata",ratingData)
    } catch (error) {
      console.log(error)
    }
  }

  return (

    <>

      {/* <h1> {pageurl}</h1> */}
      <div className="container-fluid " style={{
        backgroundImage: `url(${company.bgbanner})`
      }}>
        <div className="bg-color">
          <div className="container">
            <div className="row">
              <div className="col-g-12">
                <div className="heading">
                  <ol>
                    <Link to="/list" className="home-link">
                      <li>Home</li>
                    </Link>
                    <li><span>/</span>{company.companyname
                    }</li>

                  </ol>
                  <img src={company.companylogo} />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>



      <div className="container-fluid bg-white mt-3 p-4">
        <div className="container">
          <div className="row">
            <div className="col-g-12">
              <div className="detail-company">
                <h3>{company.companyname}     </h3>
                <p className="card-text">
                  <span className='rating btn btn-success '>
                    {company.rating}
                  </span>

                  <div className='star'>
                    <span className='star-rating'></span>
                  </div>

                  <div className='vote'>{company.review} Votes</div>
                </p>

                <div className="brand-icon">
                  <ul>
                    <li><a href={company.facebookurl} className="fb"><FaFacebookF className="icon-1" />share
                    </a> </li>
                    <li><a href={company.twitterurl} className="twit"><FaTwitter className="icon-2" />share
                    </a></li>
                    <li><a href={company.linkedinurl} className="linkdin"><FaLinkedinIn className="icon-3" />share</a></li>
                    <li><a href={company.emailid} className="mail"><CiMail className="icon-4" />Email
                    </a></li>
                    <li><a href={company.whatsapp} className="whatsapp"><FaWhatsapp className="icon-4" />share
                    </a></li>

                  </ul>
                </div>

              </div>


            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid  mt-3 p-4">

        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="contact-detail bg-white p-4">
                <h4> Contact Details</h4>
                <div className="detail-model">
                  <button type="button" className="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Send Message
                  </button>
                  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-2">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="staticBackdropLabel"><b>Please Enter Your Message</b></h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <div className="col-lg-12 mt-3">
                            <label for="exampleInputEmail1" class="form-label"><b>Enter Full Name</b></label>
                            <input type="email" class="form-control" ref={enquiryInput} onChange={(e) => setenquiryName(e.target.value)} id="exampleInputEmail1" placeholder="Enter Fullname
                           " aria-describedby="emailHelp" />
                            <div className="error" style={{ display: "none" }} ref={nameRef}>
                              Invalid Form, Invalid Form, First Name can not be empty
                            </div>
                          </div>

                          <div className="col-lg-12 mt-3">
                            <label for="exampleInputEmail1" class="form-label"><b>Enter Mobile no</b></label>

                            <input type="number" class="form-control" ref={enquiryInput1} onChange={(e) => setenquiryNo(e.target.value)} id="exampleInputEmail1" placeholder="Enter mobile no.
                           " aria-describedby="emailHelp" />
                            <div className="error" style={{ display: "none" }} ref={mobileRef}>
                              Invalid Form, Invalid Form, Mobile Number can not be empty
                            </div>
                          </div>


                          <div className="col-lg-12 mt-3">
                            <label for="exampleInputEmail1" class="form-label"><b>Enter Comment</b></label>
                            <textarea ref={enquiryInput2} class="form-control" onChange={(e) => setenquiryMsg(e.target.value)} style={{ height: "120px" }} placeholder="Enter comment" name="message" />
                            <div className="error" style={{ display: "none" }} ref={msgRef}>
                              Invalid Form, Invalid Form, Massage can not be empty
                            </div>
                          </div>


                          {data.status == 201 &&
                            <div className='alert alert-error alert-dismissable'>{data.message}</div>
                          }
                          {data.status == 200 &&
                            <div className=' alert-success '>
                              {data.message} This is success</div>
                          }

                          <button type="button" onClick={enquiryValidate} class="w-100 btn btn-success mt-3 p-1">Submit</button>

                        </div>





                      </div>

                    </div>
                  </div>

                  {/* <button type="button" class="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap"><AiOutlineMessage /> Send Message</button>


                  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-2">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="staticBackdropLabel">  This Business</h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <div className="col-lg-6 mt-3">
                            <label for="exampleInputEmail1" class="form-label">Enter Full Name</label>

                            <input type="email" class="form-control " id="exampleInputEmail1" placeholder="Enter Fullname
                           " aria-describedby="emailHelp" />
                          </div>
                          <div className="col-lg-6 mt-3">
                            <label for="exampleInputEmail1" class="form-label">Enter Email</label>

                            <input type="email" class="form-control " id="exampleInputEmail1" placeholder="Enter Email
                           " aria-describedby="emailHelp" />
                          </div>
                          <div className="col-lg-6 mt-3">
                            <label for="exampleInputEmail1" class="form-label">Enter Mobile no</label>

                            <input type="email" class="form-control " id="exampleInputEmail1" placeholder="Enter mobile no.
                           " aria-describedby="emailHelp" />
                          </div>

                          <div className="col-lg-6 mt-3">
                            <label for="exampleInputEmail1" class="form-label">Mark As</label>

                            <input type="email" class="form-control " id="exampleInputEmail1" placeholder="Enter Mark as
                           " aria-describedby="emailHelp" />
                          </div>



                          <div className="col-lg-12 mt-3">
                            <label for="exampleInputEmail1" class="form-label">Enter Comment</label>


                            <textarea class="form-control" style={{ height: "120px" }} placeholder="Enter comment" name="message" />

                          </div>

                          <button type="submit" class=" form-btn mt-3 p-1">Report</button>
                          <button type="button" class="close-btn" data-bs-dismiss="modal">Close</button>
                        </div>





                      </div>

                    </div>
                  </div> */}
                </div>

                {/*  */}

                <div className="contact-info bg-white">
                  <ul className="mt-1">
                    <li><a href=""><FaWhatsapp className="contact-icon" /> 9926661418 </a></li>
                    <li><a href=""><FaPhoneAlt className="contact-icon" /> {company.mobileno}</a></li>
                    <li><a href=""><CiMail className="contact-icon" />{company.emailid}</a></li>
                    <li><a href="" className="text-black"><FaEarthAfrica className="contact-icon-1" /> {company.websiteurl}</a></li>
                    <li><a href="" className="text-black"> <FaMapMarkerAlt className="contact-icon-1" />{company.address}, {company.pincode}</a></li>


                  </ul>


                </div>
              </div>

              <div className="social-media mt-4 p-4">
                <h4>Social Media Profile</h4>
                <p>Follow Dezven Software Solution on</p>

                <div className="brand-icon ">
                  <ul>
                    <li><a href="" className="fb-1"><FaFacebookF className="icon-1" />
                    </a> </li>
                    <li><a href="" className="twit-1"><FaTwitter className="icon-2" />
                    </a></li>
                    <li><a href="" className="linkdin-1"><FaLinkedinIn className="icon-3" /></a></li>
                    <li><a href="" className="insta"><FaInstagram className="icon-4" />
                    </a></li>
                    <li><a href="" className="youtube"><FaYoutubeSquare className="icon-5" />
                    </a></li>

                  </ul>
                </div>
              </div>


              <div className="listning-page mt-4 p-4">
                <h4>Similar Listing</h4>
                <table className="table-responsive">
                  <tr>

                    {companyList.map((key) => {
                      return (
                        <td>{key.token}
                          <a href="" className=" company-link">
                            <div className="com-img" style={{ backgroundImage: `url(${key.companylogo})` }}>
                              <div className="bg-color-2">
                                <h3 >{key.companyname}</h3>
                                <p className="card-text-1">

                                  <div className='star'>
                                    <span className='star-rating'></span>
                                  </div>
                                  <span className='rating'>
                                    {key.rating}
                                  </span>

                                  <div className='vote'>{key.review} Votes</div>
                                </p>
                              </div>
                            </div>

                          </a>
                        </td>
                      )
                    })}



                    {/* <td>
                      <a href="" className=" company-link">
                        <div className="com-img-1">
                          <div className="bg-color-2">
                            <h3 >Fly Infosoft</h3>
                            <p className="card-text-1">

                              <div className='star'>
                                <span className='star-rating'></span>
                              </div>
                              <span className='rating'>
                                (5.00)
                              </span>

                              <div className='vote'>65 Votes</div>
                            </p>
                          </div>
                        </div>

                      </a>
                    </td>
                    <td>
                      <a href="" className=" company-link">
                        <div className="com-img-2">
                          <div className="bg-color-2">
                            <h3 >Dezven software Solution</h3>
                            <p className="card-text-1">

                              <div className='star'>
                                <span className='star-rating'></span>
                              </div>
                              <span className='rating'>
                                (5.00)
                              </span>

                              <div className='vote'>65 Votes</div>
                            </p>
                          </div>
                        </div>

                      </a>
                    </td>
                    <td>
                      <a href="" className=" company-link">
                        <div className="com-img-3">
                          <div className="bg-color-2">
                            <h3 >RamaaSoft</h3>
                            <p className="card-text-1">

                              <div className='star'>
                                <span className='star-rating'></span>
                              </div>
                              <span className='rating'>
                                (5.00)
                              </span>

                              <div className='vote'>65 Votes</div>
                            </p>
                          </div>
                        </div>

                      </a>
                    </td>
                    <td>
                      <a href="" className=" company-link">
                        <div className="com-img-4">
                          <div className="bg-color-2">
                            <h3 >RankFrog soft</h3>
                            <p className="card-text-1">

                              <div className='star'>
                                <span className='star-rating'></span>
                              </div>
                              <span className='rating'>
                                (5.00)
                              </span>

                              <div className='vote'>65 Votes</div>
                            </p>
                          </div>
                        </div>

                      </a>
                    </td>
                    <td>
                      <a href="" className=" company-link">
                        <div className="com-img-5">
                          <div className="bg-color-2">
                            <h3 >seo velly</h3>
                            <p className="card-text-1">

                              <div className='star'>
                                <span className='star-rating'></span>
                              </div>
                              <span className='rating'>
                                (5.00)
                              </span>

                              <div className='vote'>65 Votes</div>
                            </p>
                          </div>
                        </div>

                      </a>
                    </td>
                    <td>
                      <a href="" className=" company-link">
                        <div className="com-img">
                          <div className="bg-color-2">
                            <h3 >Dezven software Solution</h3>
                            <p className="card-text-1">

                              <div className='star'>
                                <span className='star-rating'></span>
                              </div>
                              <span className='rating'>
                                (5.00)
                              </span>

                              <div className='vote'>65 Votes</div>
                            </p>
                          </div>
                        </div>

                      </a>
                    </td> */}





                  </tr>
                </table>
              </div>

            </div>
            <div className="col-lg-8">
              <div className="d-page bg-white p-5">
                <h4>About {company.companyname}, BhopaL</h4>

                <p className="desc">{company.aboutus}
                  {/* <br></br>
                  <br></br>


                  Dezven is the best training institute in Bhopal. We have a very committed team consisting of technical trainers who are continuously guiding, mentoring, admonish and coaching the students.
                  <br></br>
                  <br></br>

                  We Offer various Courses such as <b>Python, Java, Frontend Development,  Web Development, C, CPP, HTML, CSS, JavaScript, Jquery,  MIS, Graphic Designing, React JS, Angular JS, Core Java, Advance Java </b>

                  <br></br>
                  <br></br>
                  We also provide traning in various online marketing course's like
                  <b>SEO, SMO, Affliate Marketing</b> */}
                </p>

                {/* <p>Dezven Software Solution is one of leading IT company near mp nagar in Bhopal. It provide multiple services in IT sector. DDezven software  have a highly skilled and experienced team of IT professionals.  Latest technologies are used by DDezven group for providing end to end business solution to the DDezven's client.</p>

                <p>Dezven software is leading training institute in Bhopal. DDezven group provide professional training in multiple courses.  DDezven provide the best training with their experienced instructors.</p>

                <p>Dezven software provide services in web design, web development, Mobile app development, android app development</p>

                <p>Dezven software provide training in PHP, HTML, Web Designing, Mobile app development</p>
                <p>Get address, contact number, phone number user ratings, reviews, contact person of DDezven Software Solution in mp nagar, Bhopal</p>

                <p>Dezven Software Solution is locate at 186, 3rd floor, near Hotel Galaxy Star, Near Sargam Cinema, Zone-II, Maharana Pratap Nagar in Bhopal</p> */}
              </div>


              <div className="d-page-2 bg-white mt-4 p-3">
                <h4>Frequently Asked Question</h4>
                {faq?.map((key) => {
                  // console.log("faquetion", key)
                  return (
                    <div className="desc-2">
                      <h5>{key.question}</h5>
                      <p>{key.answer}</p>
                    </div>
                  )


                })}


                {/* <div className="desc-2">
                  <h5>Yes, we provide certificate after complete of training.</h5>
                  <p>You can make payment Via Cash, Master Card, Visa Card, Credit Card.</p>
                </div>
                <div className="desc-2">
                  <h5>3. Are you providing any study material and practice question and revision?</h5>
                  <p>.Yes we will provide study material and practice question in hard and soft copy.</p>
                </div>
                <div className="desc-2">
                  <h5>4. What are its hours of operation ?</h5>
                  <p>The establishment is functional on

                    <br></br>

                    Monday :- 10:00 Am - 7:00 Pm

                    <br></br>
                    Tuesday :- 10:00 Am - 7:00 Pm
                    <br></br>
                    Wednesday :- 10:00 Am - 7:00 Pm
                    <br></br>
                    Thursday :- 10:00 Am - 7:00 Pm
                    <br></br>
                    Friday :- 10:00 Am - 7:00 Pm

                    <br></br>
                    Saturday :- 10:00 Am - 7:00 Pm

                    <br></br>
                    Sunday :- 10:00 Am - 7:00 Pm

                  </p>
                </div>
                <div className="desc-2">
                  <h5>5. Do you offer Demo or Trial class before joining?</h5>
                  <p>Yes, We will provide demo and trail class also before joining</p>
                </div>
                <div className="desc-2">
                  <h5>6. Will this course help me in my career?</h5>
                  <p>Definitely, this course will help you to improve your skills.</p>
                </div> */}
              </div>

              <div className="d-page-3 bg-white mt-4 p-3">
                <h4>Rating & Review</h4>

                {rating.map((key) => {
                  return (
                    <div className="review mt-3">
                      <p className="card-text-2">
                        <FaUserCircle className="user" />
                        <div> <div className='vote d-block'>{key.fullname}</div>
                          <div className='star d-block'>
                            <span className='star-rating'></span>
                            <span className='rating'>
                              {key.rating}
                            </span>
                          </div>
                        </div>
                      </p>
                      <p className="ps-5">{key.comment}</p>

                    </div>
                  )
                })}


                {/* 
                <div className="review mt-3">


                  <p className="card-text-2">
                    <FaUserCircle className="user" />
                    <div> <div className='vote d-block'>Narayen Dubey</div>
                      <div className='star d-block'>
                        <span className='star-rating'></span>
                        <span className='rating'>
                          (5)
                        </span>
                      </div>
                    </div>
                  </p>
                  <p>Dezven Software is the best training institute, Here I got a deep knowledge of working on live projects. I enjoyed working on international projects, communicating with international clients. This is the best training institute for PHP, web designing, and java. I have done training with working on a live project on PHP and Java, now concept are really get clear and I am able to develop project independently also. I found it the most amazing institute where the whole faculty is very helpful and experienced that I enjoyed my training very much.</p>

                </div>
*/}

                <div class="collapse" id="collapseExample">
                  <div class="card card-body">

                    <div className="review mt-3">


                      <p className="card-text-2">
                        <FaUserCircle className="user" />
                        <div> <div className='vote d-block'>Narayen Dubey</div>
                          <div className='star d-block'>
                            <span className='star-rating'></span>
                            <span className='rating'>
                              (5)
                            </span>
                          </div>
                        </div>
                      </p>
                      <p>Dezven Software is the best training institute, Here I got a deep knowledge of working on live projects. I enjoyed working on international projects, communicating with international clients. This is the best training institute for PHP, web designing, and java. I have done training with working on a live project on PHP and Java, now concept are really get clear and I am able to develop project independently also. I found it the most amazing institute where the whole faculty is very helpful and experienced that I enjoyed my training very much.</p>

                    </div>
                    <div className="review mt-3">


                      <p className="card-text-2">
                        <FaUserCircle className="user" />
                        <div> <div className='vote d-block'>Narayen Dubey</div>
                          <div className='star d-block'>
                            <span className='star-rating'></span>
                            <span className='rating'>
                              (5)
                            </span>
                          </div>
                        </div>
                      </p>
                      <p>Dezven Software is the best training institute, Here I got a deep knowledge of working on live projects. I enjoyed working on international projects, communicating with international clients. This is the best training institute for PHP, web designing, and java. I have done training with working on a live project on PHP and Java, now concept are really get clear and I am able to develop project independently also. I found it the most amazing institute where the whole faculty is very helpful and experienced that I enjoyed my training very much.</p>

                    </div>
                    <div className="review mt-3">


                      <p className="card-text-2">
                        <FaUserCircle className="user" />
                        <div> <div className='vote d-block'>Narayen Dubey</div>
                          <div className='star d-block'>
                            <span className='star-rating'></span>
                            <span className='rating'>
                              (5)
                            </span>
                          </div>
                        </div>
                      </p>
                      <p>Dezven Software is the best training institute, Here I got a deep knowledge of working on live projects. I enjoyed working on international projects, communicating with international clients. This is the best training institute for PHP, web designing, and java. I have done training with working on a live project on PHP and Java, now concept are really get clear and I am able to develop project independently also. I found it the most amazing institute where the whole faculty is very helpful and experienced that I enjoyed my training very much.</p>

                    </div>
                    <div className="review mt-3">


                      <p className="card-text-2">
                        <FaUserCircle className="user" />
                        <div> <div className='vote d-block'>Narayen Dubey</div>
                          <div className='star d-block'>
                            <span className='star-rating'></span>
                            <span className='rating'>
                              (5)
                            </span>
                          </div>
                        </div>
                      </p>
                      <p>Dezven Software is the best training institute, Here I got a deep knowledge of working on live projects. I enjoyed working on international projects, communicating with international clients. This is the best training institute for PHP, web designing, and java. I have done training with working on a live project on PHP and Java, now concept are really get clear and I am able to develop project independently also. I found it the most amazing institute where the whole faculty is very helpful and experienced that I enjoyed my training very much.</p>

                    </div>
                    <div className="review mt-3">


                      <p className="card-text-2">
                        <FaUserCircle className="user" />
                        <div> <div className='vote d-block'>Narayen Dubey</div>
                          <div className='star d-block'>
                            <span className='star-rating'></span>
                            <span className='rating'>
                              (5)
                            </span>
                          </div>
                        </div>
                      </p>
                      <p>Dezven Software is the best training institute, Here I got a deep knowledge of working on live projects. I enjoyed working on international projects, communicating with international clients. This is the best training institute for PHP, web designing, and java. I have done training with working on a live project on PHP and Java, now concept are really get clear and I am able to develop project independently also. I found it the most amazing institute where the whole faculty is very helpful and experienced that I enjoyed my training very much.</p>

                    </div>




                  </div>
                </div>
                <p class="d-inline-flex gap-1">

                  <button class="review-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    View More Review...
                  </button>
                </p>


              </div>


              <div className="d-form mt-4 p-3 bg-white">
                <h4>Leave Your Comment...</h4>
                <div className="col-lg-3">


                  <form action="" method="post" id="ratfrm">
                    <div class="rating-box">
                      <div className="rating-heading">Rating</div>
                      <div class="stars">
                        {[...Array(5)].map((star, index) => {
                          index += 1;
                          // console.log("rating",starRating)
                          return (
                            <button
                              type="button"
                              key={index}
                              className={index <= (starRating) ? "on" : "off"}
                              onClick={() => setstarRating(index)} >
                              <span className="star1">&#9733; </span>
                            </button>
                          );
                        })}
                      </div>

                      {/* <fieldset class="ratingbtn">
                        <input type="radio" id="star5" name="rating" value="5" />
                        <label class="full" for="star5"></label>
                        <input type="radio" id="star4half" name="rating" value="4.5" />
                        <label class="half" for="star4half"></label>
                        <input type="radio" id="star4" name="rating" value="4" />
                        <label class="full" for="star4"></label>
                        <input type="radio" id="star3half" name="rating" value="3.4" />
                        <label class="half" for="star3half"></label>
                        <input type="radio" id="star3" name="rating" value="3" checked="checked" />
                        <label class="full" for="star3"></label>
                        <input type="radio" id="star2half" name="rating" value="2.5" />
                        <label class="half" for="star2half"></label>
                        <input type="radio" id="star2" name="rating" value="2" />
                        <label class="full" for="star2"></label>
                        <input type="radio" id="star1half" name="rating" value="1.5" />
                        <label class="half" for="star1half"></label>
                        <input type="radio" id="star1" name="rating" value="1" />
                        <label class="full" for="star1"></label>
                        <input type="radio" id="starhalf" name="rating" value="0.5" />
                        <label class="half" for="starhalf"></label>
                      </fieldset> */}
                    </div>
                  </form>
                </div>
                <div className="col-lg-9"></div>
                <div className="row">
                  <div className="col-lg-6">
                    <label for="exampleInputEmail1" class="form-label">Enter Fullname</label>
                    <FaRegUser className="contact-icon-2" />
                    <input type="email" class="form-control" ref={ratingInput} onChange={(e) => setratingName(e.target.value)} id="exampleInputEmail1" placeholder="Enter Fullname" aria-describedby="emailHelp" />
                    <div className="error" style={{ display: "none" }} ref={ratingNameRef}>
                      Invalid Form, Invalid Form, First Name can not be empty
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <label for="exampleInputEmail1" class="form-label">Enter Mobile no</label>
                    <FaPhoneAlt className="contact-icon-2" />
                    <input type="email" class="form-control " ref={ratingInput1} onChange={(e) => setratingNo(e.target.value)} id="exampleInputEmail1" placeholder="Enter mobile no. " aria-describedby="emailHelp" />
                    <div className="error" style={{ display: "none" }} ref={ratingNoRef}>
                      Invalid Form, Invalid Form, Mobile no. can not be empty
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 mt-4">
                  <label for="exampleInputEmail1" class="form-label">Enter Message</label>

                  <FaInbox className="contact-icon-2" />
                  <textarea class="form-control" ref={ratingInput2} onChange={(e) => setratingMsg(e.target.value)} style={{ height: "150px" }} placeholder="Enter Message" name="message" />
                  <div className="error" style={{ display: "none" }} ref={ratingCommentRef}>
                    Invalid Form, Invalid Form, Comment can not be empty
                  </div>

                </div>
                {ratingData.status == 201 &&
                  <div className='alert alert-error alert-dismissable'>{ratingData.message}</div>
                }
                {ratingData.status == 200 &&
                  <div className=' alert-success '>
                    {ratingData.message} This is success</div>
                }
                <button type="button" onClick={companyRating} class=" form-btn mt-3 p-1">Submit</button>
              </div>


              <div className="map p-3 mt-4 bg-white">
                <h3>Map</h3>
                <iframe src={company.mapiframe} width="700" height="450" className="p-3" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>

              <div className="d-page-4 bg-white mt-4 p-3">


                <button type="button" className="p-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  Report
                </button>


                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div class="modal-dialog modal-2">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Report This Business</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <div className="col-lg-6 mt-3">
                          <label for="exampleInputEmail1" class="form-label">Enter Full Name</label>

                          <input type="email" class="form-control " id="exampleInputEmail1" placeholder="Enter Fullname
                           " aria-describedby="emailHelp" />
                        </div>
                        <div className="col-lg-6 mt-3">
                          <label for="exampleInputEmail1" class="form-label">Enter Email</label>

                          <input type="email" class="form-control " id="exampleInputEmail1" placeholder="Enter Email
                           " aria-describedby="emailHelp" />
                        </div>
                        <div className="col-lg-6 mt-3">
                          <label for="exampleInputEmail1" class="form-label">Enter Mobile no</label>

                          <input type="email" class="form-control " id="exampleInputEmail1" placeholder="Enter mobile no.
                           " aria-describedby="emailHelp" />
                        </div>

                        <div className="col-lg-6 mt-3">
                          <label for="exampleInputEmail1" class="form-label">Mark As</label>

                          <input type="email" class="form-control " id="exampleInputEmail1" placeholder="Enter Mark as
                           " aria-describedby="emailHelp" />
                        </div>



                        <div className="col-lg-12 mt-3">
                          <label for="exampleInputEmail1" class="form-label">Enter Comment</label>


                          <textarea class="form-control" style={{ height: "120px" }} placeholder="Enter comment" name="message" />

                        </div>

                        <button type="submit" class=" form-btn mt-3 p-1">Report</button>
                        <button type="button" class="close-btn" data-bs-dismiss="modal">Close</button>
                      </div>





                    </div>

                  </div>
                </div>
              </div>




            </div>
          </div>
        </div>
      </div>





    </>

  );
}

export default Detail;