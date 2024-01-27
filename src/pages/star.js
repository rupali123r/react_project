import React, { useState, useCallback } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
// import styled from "styled-components";

  const StarRating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

  useCallback(() => {
    localStorage.setItem("rating", JSON.stringify(rating));
  }, [rating]);

 

  return (
    <center>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        console.log(rating)
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            // onMouseEnter={() => setHover(index)}
            // onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733; star</span>
          </button>
        );
      })}
    </div>
      <br></br>
        <br></br>
        <br></br>
      <br></br>
        <br></br>
        <br></br>
      <br></br>
        <br></br>
        <br></br>



        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
       <li variant="success" id="dropdown-basic">My Profile</li>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item ><Link>Dashbord</Link></Dropdown.Item>
        <Dropdown.Item ><Link>My Business</Link></Dropdown.Item>
        <Dropdown.Item ><Link>My Proflie</Link></Dropdown.Item>
        <Dropdown.Item ><Link>Change Password</Link></Dropdown.Item>
        <Dropdown.Item ><Link>Logout</Link></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>



    
  </center>
  );
};

export default StarRating;