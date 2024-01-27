import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaUser } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { memo } from "react";
import './style.css';
import { userContext, myData } from "./useContext";



function Header() {


  const logout = () => {
    localStorage.removeItem("access_token");
    // this.render();

  };

  return (
    <>
      <div className="container-fluid p-0 header">
        <div className="container">
          <div className="row">
            <div className="full-screen">
            </div>

            <div className="col-lg-3 col-3 col-md-3">
              <div className="logo">
                <img src="logo.webp" />
              </div>
            </div>

            <div className="col-lg-4 col-8 col-md-8">

            </div>

            <div className="col-lg-5 col-1 col-md-1 p-0">

              <button style={
                {
                  border: "none",
                  marginTop: "25px"
                }
              } data-bs-toggle="modal" data-bs-target="#exampleModal">
                <FaBars className="manu-bar" />
              </button>
              {/*  mobile  manu bar */}
              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content b-0">
                    <div class="modal-header b-0">

                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body ">

                      <ul>


                        <li><Link to="/" className="nav-link"><FaHome /> Home</Link></li>
                        <li><Link to="/login" className="nav-link"><FontAwesomeIcon icon={faRightToBracket} /> Login</Link></li>
                        <li> <Link to="/login" className="nav-link"><FontAwesomeIcon icon={faEnvelope} />  Add Your Business </Link></li>
                      </ul>
                    </div>

                  </div>
                </div>
              </div>
              {/* main nav-bar  */}
              <ul className="nav-bar">
                <li>
                  <Link to="/" className="nav-link">Home</Link>
                </li>

                <li>

                  {!localStorage.getItem("access_token") ? <Link to="/login" className="nav-link"><FontAwesomeIcon icon={faRightToBracket} /> Login</Link> : <Link to="/myprofile" className="nav-link myprofile dropdown " data-bs-toggle="dropdown" aria-expanded="false"><FaUser className="userIcon" />Myprofile</Link>}

                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-link" to="/profile">Dashbord</Link></li>
                    <li><Link className="dropdown-link" to="/profile">My Business</Link></li>
                    <li><Link className="dropdown-link" to="/myprofile">My Profile</Link></li>
                    <li><Link className="dropdown-link" to="/password">Change Password</Link></li>
                    <li><Link className="dropdown-link" onClick={logout} to="/password">Log Out</Link></li>
                  </ul>

                </li>

                <li>

                  <Link to="/login" className="nav-link-btn"><FontAwesomeIcon icon={faEnvelope} />  Add Your Business </Link>

                </li>



              </ul>


            </div>

          </div>


        </div>


      </div>

    </>

  );
}

export default memo = (Header);