import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { userContext, myData } from "./useContext";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaRegFileWord } from "react-icons/fa";
import { IoKeySharp } from "react-icons/io5";
import { MdLogin } from "react-icons/md";


function Dashbord() {
  const logout = () => {
    localStorage.removeItem("access_token");
    //console.log("hello", myData.access_token)
  }; //console.log("hello", myData.access_token)
  
  return (
    <>

      <div className="dasbord bg-white mt-3">
        <h3>My Dashbord</h3>
        <ul>
          <li className="dashbord-link"><Link to="/" className="d-nav-link"><i><FaHome /></i>  Dashboard</Link></li>
          <li className="dashbord-link"><Link to="/profile" className="d-nav-link"><i><FaRegFileWord /></i> My Business List</Link></li>
          <li className="dashbord-link"><Link to="/myprofile" className="d-nav-link"><i><FaUser /></i>  My Profile</Link></li>
          <li className="dashbord-link"><Link to="/password" className="d-nav-link"><i><IoKeySharp /></i> Change Password</Link></li>
          <li className="dashbord-link"><Link to="/login" onClick={logout} className="d-nav-link"><i><MdLogin /></i> Logout</Link></li>
        </ul>
      </div>

    </>
  );
}

export default Dashbord;

