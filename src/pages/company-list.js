
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";

import React, { useState, useEffect, memo } from 'react';
import axios from "axios";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'



function CompanyDetail() {

  const [posts, setPosts] = useState([]);
  const { companyurl } = useParams();

  useEffect(() => {
    fetchData();
  }, []);


  async function fetchData() {
    try {
      const companyData = {
        pageurl: companyurl

      }


      const response = await axios.post('https://bhopal.city/api/web/v1/company.php', companyData);
      console.log(JSON.stringify(response.data));
      setPosts(response.data.companylist);
      // setPosts1(response.data.company);


    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>

      <div className="container-fluid mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="listing-card-page">
                <h5>Search near by</h5>
                <input type="text" class="form-control mt-4" placeholder="Filter By Area..." />
                <ul className="listing-page">
                  <li><p>Reset To All Areas</p></li>
                  <li><Link To=""><FontAwesomeIcon icon={faAnglesRight} />  near Media Marketing</Link></li>
                  <li><Link To=""><FontAwesomeIcon icon={faAnglesRight} />  near Marketing</Link></li>
                  <li><Link To=""><FontAwesomeIcon icon={faAnglesRight} />  near Application</Link></li>
                  <li><Link To=""><FontAwesomeIcon icon={faAnglesRight} />  near Service</Link></li>
                  <li> <Link To=""><FontAwesomeIcon icon={faAnglesRight} />  near Development</Link></li>
                  <li><Link To=""><FontAwesomeIcon icon={faAnglesRight} />   near App Development</Link></li>
                  <li> <Link To=""><FontAwesomeIcon icon={faAnglesRight} />  near App Development</Link></li>
                  <li> <Link To=""><FontAwesomeIcon icon={faAnglesRight} />  near App Development</Link></li>
                  <li><Link To=""><FontAwesomeIcon icon={faAnglesRight} />   near Design</Link></li>
                  <li><Link To=""><FontAwesomeIcon icon={faAnglesRight} />   near development</Link></li>
                  <li><Link To=""><FontAwesomeIcon icon={faAnglesRight} />   near Media Marketing</Link></li>
                  <li><Link To=""><FontAwesomeIcon icon={faAnglesRight} />   near Marketing</Link></li>
                  <li><Link To=""><FontAwesomeIcon icon={faAnglesRight} />  near Application</Link></li>
                  <li><Link To=""><FontAwesomeIcon icon={faAnglesRight} />  near Service</Link></li>
                  <li> <Link To=""><FontAwesomeIcon icon={faAnglesRight} />  near Development</Link></li>
                  <li><Link To=""><FontAwesomeIcon icon={faAnglesRight} />   near App Development</Link></li>
                  <li> <Link To=""><FontAwesomeIcon icon={faAnglesRight} />  near App Development</Link></li>
                  <li> <Link To=""><FontAwesomeIcon icon={faAnglesRight} />  near App Development</Link></li>
                  <li><Link To=""><FontAwesomeIcon icon={faAnglesRight} />   near Design</Link></li>
                  <li><Link To=""><FontAwesomeIcon icon={faAnglesRight} />   near development</Link></li>
                  <li><Link To=""><FontAwesomeIcon icon={faAnglesRight} />   near Media Marketing</Link></li>
                  <li><Link To=""><FontAwesomeIcon icon={faAnglesRight} />   near Marketing</Link></li>
                  <li><Link To=""><FontAwesomeIcon icon={faAnglesRight} />   near Application</Link></li>
                  <li><Link To=""><FontAwesomeIcon icon={faAnglesRight} />   near Service</Link></li>
                  <li> <Link To=""><FontAwesomeIcon icon={faAnglesRight} />  near Development</Link></li>
                  <li><Link To=""><FontAwesomeIcon icon={faAnglesRight} />   near App Development</Link></li>
                  <li> <Link To=""><FontAwesomeIcon icon={faAnglesRight} />  near App Development</Link></li>
                  <li> <Link To=""><FontAwesomeIcon icon={faAnglesRight} />  near App Development</Link></li>
                  <li><Link To=""><FontAwesomeIcon icon={faAnglesRight} />   near Design</Link></li>
                  <li><Link To=""><FontAwesomeIcon icon={faAnglesRight} />    near development</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-8">
              {posts?.map((key, index) => {
                return (
                  <div className="listing-card">
                    <div className="row">
                      <div className="col-lg-4">
                        <img src={key.companylogo} name="logo" ></img>
                      </div>
                      <div className="col-lg-8">
                        <div className="listing-card-details">
                          <h4><Link to={key.pageurl}>{key.companyname}</Link></h4>
                          <p className="icon">{key.rating}<Link to=""> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /></Link> {key.review} Votes</p>
                          <p> <FontAwesomeIcon icon={faLocationDot} /> {key.address}</p>

                          <p> <FontAwesomeIcon icon={faPhone} /> {key.mobileno}</p>
                          <p><FontAwesomeIcon icon={faEnvelope} /> <Link to="">  {key.emailid}</Link></p>
                          <Link to=""><button className="btn"><FontAwesomeIcon icon={faEnvelope} /> Email now</button></Link>&nbsp;&nbsp;
                          <Link to=""><button className="btn" type="button"><FontAwesomeIcon icon={faPhone} />  Call now</button></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
              {/* <div className="row">
                            <div className="col-lg-4">
                                <img src="dezven-software-solution.webp" name="logo" ></img>
                            </div>
                            <div className="col-lg-8">
                              <div className="listing-card-details">
                                <h4><Link to="">Dezven Software Solution</Link></h4>
                                <p className="icon">(5.00) <Link to=""> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/></Link> 65 Votes</p>
                                <p> <FontAwesomeIcon icon={faLocationDot}/> 186, 3rd floor, near Hotel Galaxy Star, Near Sargam Cinema, Zone-II, Maharana Pratap Nagar</p>
                                <p> <FontAwesomeIcon icon={faPhone} /> 9893304801</p>
                                <p><FontAwesomeIcon icon={faEnvelope}/> <Link to="">  dezvengroup@gmail.com</Link></p>
                                <Link to=""><button className="btn"><FontAwesomeIcon icon={faEnvelope}/> Email now</button></Link>&nbsp;&nbsp;
                                <Link to=""><button className="btn"  type="button"><FontAwesomeIcon icon={faPhone} />  Call now</button></Link>
                              </div>
                                </div>
                         </div> */}




              {/* <div className="listing-card">
                        <div className="row">
                            <div className="col-lg-4">
                                <img src="codeace-technologies-pvt-ltd.webp" ></img>
                            </div>
                            <div className="col-lg-8">
                              <div className="listing-card-details">
                                <h4><Link To="">CodeAce Technologies Pvt LtD</Link></h4>
                                <p className="icon">(5.00) <Link To=""> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/></Link> 65 Votes</p>
                                <p> <FontAwesomeIcon icon={faLocationDot}/> 186, 3rd floor, near Hotel Galaxy Star, Near Sargam Cinema, Zone-II, Maharana Pratap Nagar</p>
                                <p> <FontAwesomeIcon icon={faPhone} /> 9893304801</p>
                                <p><FontAwesomeIcon icon={faEnvelope}/> <Link To="">  dezvengroup@gmail.com</Link></p>
                                <Link To=""><button className="btn"><FontAwesomeIcon icon={faEnvelope}/> Email now</button></Link>&nbsp;&nbsp;
                                <Link To=""><button className="btn"><FontAwesomeIcon icon={faPhone} />  Call now</button></Link>
                              </div>
                                </div>
                         </div>
                        </div>
                        <div className="listing-card">
                        <div className="row">
                            <div className="col-lg-4">
                                <img src="fly-infosoft.webp" ></img>
                            </div>
                            <div className="col-lg-8">
                              <div className="listing-card-details">
                                <h4><Link To="">Fly Infosoft</Link></h4>
                                <p className="icon">(5.00) <Link To=""> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/></Link> 65 Votes</p>
                                <p> <FontAwesomeIcon icon={faLocationDot}/> 186, 3rd floor, near Hotel Galaxy Star, Near Sargam Cinema, Zone-II, Maharana Pratap Nagar</p>
                                <p> <FontAwesomeIcon icon={faPhone} /> 9893304801</p>
                                <p><FontAwesomeIcon icon={faEnvelope}/> <Link To="">  dezvengroup@gmail.com</Link></p>
                                <Link To=""><button className="btn"><FontAwesomeIcon icon={faEnvelope}/> Email now</button></Link>&nbsp;&nbsp;
                                <Link To=""><button className="btn"><FontAwesomeIcon icon={faPhone} />  Call now</button></Link>
                              </div>
                                </div>
                         </div>
                        </div>
                        <div className="listing-card">
                        <div className="row">
                            <div className="col-lg-4">
                                <img src="dezven-software-solution.webp" ></img>
                            </div>
                            <div className="col-lg-8">
                              <div className="listing-card-details">
                                <h4><Link To="">Saksham Digital Technology</Link></h4>
                                <p className="icon">(5.00) <Link To=""> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/></Link> 65 Votes</p>
                                <p> <FontAwesomeIcon icon={faLocationDot}/> 186, 3rd floor, near Hotel Galaxy Star, Near Sargam Cinema, Zone-II, Maharana Pratap Nagar</p>
                                <p> <FontAwesomeIcon icon={faPhone} /> 9893304801</p>
                                <p><FontAwesomeIcon icon={faEnvelope}/> <Link To="">  dezvengroup@gmail.com</Link></p>
                                <Link To=""><button className="btn"><FontAwesomeIcon icon={faEnvelope}/> Email now</button></Link>&nbsp;&nbsp;
                                <Link To=""><button className="btn"><FontAwesomeIcon icon={faPhone} />  Call now</button></Link>
                              </div>
                                </div>
                         </div>
                        </div>
                        <div className="listing-card">
                        <div className="row">
                            <div className="col-lg-4">
                                <img src="saksham-digital-technology.webp" ></img>
                            </div>
                            <div className="col-lg-8">
                              <div className="listing-card-details">
                                <h4><Link To="">Dezven Software Solution</Link></h4>
                                <p className="icon">(5.00) <Link To=""> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/></Link> 65 Votes</p>
                                <p> <FontAwesomeIcon icon={faLocationDot}/> 186, 3rd floor, near Hotel Galaxy Star, Near Sargam Cinema, Zone-II, Maharana Pratap Nagar</p>
                                <p> <FontAwesomeIcon icon={faPhone} /> 9893304801</p>
                                <p><FontAwesomeIcon icon={faEnvelope}/> <Link To="">  dezvengroup@gmail.com</Link></p>
                                <Link To=""><button className="btn"><FontAwesomeIcon icon={faEnvelope}/> Email now</button></Link>&nbsp;&nbsp;
                                <Link To=""><button className="btn"><FontAwesomeIcon icon={faPhone} />  Call now</button></Link>
                              </div>
                                </div>
                         </div>
                        </div>*/}
            </div>

          </div>
        </div>
      </div>

    </>
  )



}
export default CompanyDetail;