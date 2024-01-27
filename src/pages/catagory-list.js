import React, { useEffect, useState, } from "react";
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";

function CatagoryList() {

  useEffect(() => {
    categoryDetail()
  }, []);

  const { cateurl } = useParams()
  const [category, setcategory] = useState([]);


  async function categoryDetail() {

    try {
      const categoryData = {
        pageurl: cateurl
      };

      const response = await axios.post('https://bhopal.city/api/web/v1/category.php', categoryData);
      //  console.log("hello",JSON.stringify(response.data));
      setcategory(response.data.category);
      // console.log("category",response.data )

    } catch (error) {
      console.error(error);
    }
  }


  return (
    <>
      {/* {cateurl} */}
      <div className="container-fluid mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="list-card-page">
                <h5>Search near by</h5>
                <ul className="list-page">
                  {category?.map((key) => {
                    // console.log("key", key.pageurl)
                    return (
                      <li><Link to={key.pageurl}><FontAwesomeIcon icon={faAnglesRight} />  {key.categoryname}</Link></li>
                    )
                  })}

                  {/* <li><Link to=""><FontAwesomeIcon icon={faAnglesRight}/>  Online Marketing</Link></li>
                                <li><Link to=""><FontAwesomeIcon icon={faAnglesRight}/>  Desktop Application</Link></li>
                                <li><Link to=""><FontAwesomeIcon icon={faAnglesRight}/>  SEO Service</Link></li>
                                <li> <Link to=""><FontAwesomeIcon icon={faAnglesRight}/> Software Development</Link></li>
                                <li><Link to=""><FontAwesomeIcon icon={faAnglesRight}/>  IOS App Development</Link></li>
                                <li> <Link to=""><FontAwesomeIcon icon={faAnglesRight}/> Android App Development</Link></li>
                                <li> <Link to=""><FontAwesomeIcon icon={faAnglesRight}/> Mobile App Development</Link></li>
                                <li><Link to=""><FontAwesomeIcon icon={faAnglesRight}/>  Web Design</Link></li>
                                <li><Link to=""><FontAwesomeIcon icon={faAnglesRight}/>  Web development</Link></li> */}
                </ul>
              </div>
            </div>
            <div className="col-lg-4"></div>
          </div>
        </div>
      </div>

    </>
  )
}
export default CatagoryList;