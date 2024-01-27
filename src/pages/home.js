import { BrowserRouter as Router, Link } from "react-router-dom";

import React, { useState, useEffect,memo } from 'react';
import axios from "axios";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faHotel } from '@fortawesome/free-solid-svg-icons';
import { faInstitution } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faCutlery } from '@fortawesome/free-solid-svg-icons';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


function Home() {
  const [posts, setPosts] = useState([]);
  const [posts1, setPosts1] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);


  async function fetchData() {
    try {
      const response = await axios.get('https://bhopal.city/api/web/v1/home-page.php');
    //  console.log(response.data.company);
      setPosts(response.data.category);
      setPosts1(response.data.company);

    //  console.log("company",response.data.company);
     // console.log("category",response.data.category)

    } catch (error) {
      console.error(error);
    }
  }
 


  return (
    <>

      <div className="container-fluid pt-3 home-img">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="home-heading">
                <h3>Explore Bhopal Business Listing and Bhopal Directory Listing</h3>
                <p>We provide you the list of best business in Bhopal</p>
              </div>

              <div className="search-box">

                <form>
                  <div className="col-lg-8 col-md-12 col-12">
                    <input type="text" placeholder="Search for anything in Bhopal" className="form-control form-input" required />

                  </div>
                  <div className="col-lg-4 col-md-12 col-12">
                    <button className="home-form-btn" type="submit"> <FontAwesomeIcon icon={faSearch} /> Search </button>

                  </div>

                </form>


              </div>
            </div>


          </div>


        </div>


      </div>




      <div className='container-fluid bg-white pb-4 pt-4'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h2 className=' catagory-heading'> Top catagory</h2>
              <p className='category-para'>Our featured categories.
              </p>


              <div className='row mt-4'>


                {posts.map((key, index) => {
               //   console.log(posts);
                  return (

                    <div className='col-lg-2 col-md-6 col-6 mt-15'>
                      <div className='category-card'>

                        <Link to={key.pageurl} className="list-link">
                           <div className='icon-box'>
                          <FontAwesomeIcon icon={key.iconname} />
                        </div>
                          <p>{key.categoryname}</p>
                        </Link>


                      </div>
                    </div>



                  );
                })}


                {/* <div className='col-lg-2 col-md-6 col-6 mt-15'>
                  <div className='category-card'>
                    <Link to="/list" className="list-link"><div className='icon-box'>
                      <FontAwesomeIcon icon={faHotel} />
                    </div>
                      <p>Hotel</p></Link>

                  </div>

                </div>

                <div className='col-lg-2 col-md-6 col-6 mt-15'>
                  <div className='category-card'>
                    <Link to="/detail" className="list-link"><div className='icon-box'>
                      <FontAwesomeIcon icon={faInstitution} />
                    </div>
                      <p>Training Institute</p></Link>

                  </div>

                </div>

                <div className='col-lg-2 col-md-6 col-6 mt-15'>
                  <div className='category-card'>
                    <Link to="/list" className="list-link"> <div className='icon-box'>
                      <FontAwesomeIcon icon={faHandshake} />
                    </div>
                      <p>Job Placement</p></Link>

                  </div>

                </div>

                <div className='col-lg-2 col-md-6 col-6 mt-15'>
                  <div className='category-card'>
                    <Link to="/list" className="list-link"> <div className='icon-box'>
                      <FontAwesomeIcon icon={faCar} />
                    </div>
                      <p>Tourist Place's</p></Link>


                  </div>

                </div>


                <div className='col-lg-2 col-md-6 col-6 mt-15'>
                  <div className='category-card'>
                    <Link to="/list" className="list-link"><div className='icon-box'>
                      <FontAwesomeIcon icon={faCutlery} />
                    </div>
                      <p>Restaurants</p></Link>

                  </div>

                </div> */}


              </div>



            </div>
          </div>
        </div>

      </div>



      <div className='container-fluid mt-5 bg-white pb-4 pt-4'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-12 '>
              <h2 className=' catagory-heading'>Premium Listings </h2>
              <p className='category-para'>Our premium business listing.</p>
              <div className='row mt-4'>


              {posts1.map((key, index) => {
       // console.log(posts1);
        return (
       

                <div className='col-lg-6 col-md-12 col-12'>
                  <div className="card mb-3 p-4" style={{ maxWidth: "540px" }}>
                    <div className="row g-0">
                      <div className="col-md-4 col-lg-4 col-4">
                        <img src={key.companylogo} className="img-fluid rounded-start" alt="..." />
                      </div>
                      <div className="col-md-8 col-lg-8 col-8">
                        <div className="card-body pt-0">
                          <h5 className="card-title"><a href={key.pageurl}>{key.companyname}</a></h5>
                          <p className="card-text">
                            <span className='rating'>
                            {key.rating}
                            </span>

                            <div className='star'>
                              <span className='star-rating'></span>
                            </div>

                            <div className='vote'>{key.review}</div>
                          </p>
                          <p className='address mb-2 '><FontAwesomeIcon icon={faMapMarker} /> {key.address} </p>
                          <div className='mobile-no mb-2'><FontAwesomeIcon icon={faPhone} /> {key.mobileno}</div>
                          <div className='card-mail mb-3'><FontAwesomeIcon icon={faEnvelope} /> {key.emailid}</div>
                          <a href={key.emailid} className='contact-dtl'><FontAwesomeIcon icon={faEnvelope} /> Email now </a>
                          <a href={key.mobileno} className='contact-dtl'><FontAwesomeIcon icon={faPhone} /> Call now </a>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>

);
})}
{/* 
                <div className='col-lg-6 col-md-12 col-12'>
                  <div className="card mb-3 p-4" style={{ maxWidth: "540px" }}>
                    <div className="row g-0">
                      <div className="col-md-4 col-lg-4 col-4">
                        <img src="lake-view.webp" class="img-fluid rounded-start" alt="..." />
                      </div>
                      <div className="col-md-8 col-md-8 col-8">
                        <div className="card-body">
                          <h5 className="card-title"> <a href=''>Lake View</a></h5>
                          <p className="card-text">
                            <span className='rating'>
                              (5.00)
                            </span>

                            <div className='star'>
                              <span className='star-rating'></span>
                            </div>

                            <div className='vote'>65 Votes</div>
                          </p>
                          <p className='address mb-2 '><FontAwesomeIcon icon={faMapMarker} />  69VJ+5GM Opposite Doordarshan, shamla hills </p>
                          <div className='mobile-no mb-2'><FontAwesomeIcon icon={faPhone} />  18002337777  </div>
                          <div className='card-mail mb-3'><FontAwesomeIcon icon={faEnvelope} />  mptb@mp.gov.in </div>
                          <a href='' className='contact-dtl'><FontAwesomeIcon icon={faEnvelope} /> Email now </a>
                          <a href='' className='contact-dtl'><FontAwesomeIcon icon={faPhone} /> Call now </a>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-lg-6 col-md-12 col-12'>
                  <div className="card mb-3 p-4" style={{ maxWidth: "540px" }}>
                    <div className="row g-0">
                      <div className="col-md-4 col-lg-4 col-4">
                        <img src="indira-gandhi-rashtriya-manav-sangrahalaya.webp" class="img-fluid rounded-start" alt="..." />
                      </div>
                      <div className="col-md-8 col-lg-8 col-8">
                        <div className="card-body">
                          <h5 className="card-title"><a href=''>Indira Gandhi Rashtriya Manav Sangrahalaya</a></h5>
                          <p className="card-text">
                            <span className='rating'>
                              (5.00)
                            </span>

                            <div className='star'>
                              <span className='star-rating'></span>
                            </div>

                            <div className='vote'>65 Votes</div>
                          </p>
                          <p className='address mb-2 '><FontAwesomeIcon icon={faMapMarker} /> 69JH+R3R, Lake View Road, next to RCE campus, Shymala Hills  </p>
                          <div className='mobile-no mb-2'><FontAwesomeIcon icon={faPhone} /> 9981783170   </div>
                          <div className='card-mail mb-3'><FontAwesomeIcon icon={faEnvelope} /> cidigrms-mp@nic.in   </div>
                          <a href='' className='contact-dtl'><FontAwesomeIcon icon={faEnvelope} /> Email now </a>
                          <a href='' className='contact-dtl'><FontAwesomeIcon icon={faPhone} /> Call now </a>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-lg-6 col-md-12 col-12'>
                  <div className="card mb-3 p-4" style={{ maxWidth: "540px" }}>
                    <div className="row g-0">
                      <div className="col-lg-4 col-md-4 col-4">
                        <img src="all-india-institute-of-medical-sciences-aiims.webp" class="img-fluid rounded-start" alt="..." />
                      </div>
                      <div className="col-md-8 col-md-8 col-8">
                        <div className="card-body">
                          <h5 className="card-title"><a href=''>All India Institute of Medical Sciences AIIMS</a> </h5>
                          <p className="card-text">
                            <span className='rating'>
                              (5.00)
                            </span>

                            <div className='star'>
                              <span className='star-rating'></span>
                            </div>

                            <div className='vote'>65 Votes</div>
                          </p>
                          <p className='address mb-2 '><FontAwesomeIcon icon={faMapMarker} />  AIIMS Campus Rd, AIIMS Campus, Saket Nagar, Habib Ganj  </p>
                          <div className='mobile-no mb-2'><FontAwesomeIcon icon={faPhone} />  07552982607 </div>
                          <div className='card-mail mb-3'><FontAwesomeIcon icon={faEnvelope} />  lo_sc_st@aiimsbhopal.edu.in </div>
                          <a href='' className='contact-dtl'><FontAwesomeIcon icon={faEnvelope} /> Email now </a>
                          <a href='' className='contact-dtl'><FontAwesomeIcon icon={faPhone} /> Call now </a>

                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}


              </div>

            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid mt-5 bg-white pt-4 pb-4' >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h2 className=' catagory-heading'> About Bhopal City</h2>
              <p className='category-para mb-4'>Welcome To The City of Lakes.</p>
            </div>


            <div className='row'>
              <div className='col-lg-8'><div className='about-para'>
                <p>Bhopal city is right in the heart of India. Bhopal is also known as city of lakes, as it has various natural as well as man made lakes.</p>
                <p>Bhopal is capital of madhya pradesh state. Bhopal is famous for various historical places and natural beauty.</p>
              </div>


              </div>
              <div className='col-lg-4'></div>
            </div>

          </div>
        </div>
      </div>



    </>

  );
}

export default Home;