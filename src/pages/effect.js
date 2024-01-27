
import React, { useState, useEffect } from 'react';
import axios from "axios";
function Home3() {
  const [posts, setPosts] = useState([]);
  const [posts1, setPosts1] = useState([]);
  const [posts2, setPosts2] = useState([]);


  async function fetchData() {
    try {
      const response = await axios.get('https://aratb.com/api/v1/home.php');
      //  console.log(response.data);
      setPosts(response.data.countryname);
      setPosts1(response.data.language);
      setPosts2(response.data.baharain);

    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      {posts2.map((key, index) => {
        console.log(posts);
        return (
          <div>
            <h2 >{key}</h2>
            <h2 >{key}</h2>
          </div>
        );
      })}

      {posts1.map((key, index) => {
        console.log(posts);
        return (
          <div>
            <h2 >{key.id}</h2>
            <h2 >{key.langpre}</h2>
            <h2 >{key.languagename}</h2>
            <h2 >{key.language}</h2>
            <img src={key.image.uri} />
          </div>
        );
      })}


     {posts.map((key, index) => {
       console.log(posts);
       return (
         <div>
           <h2 >{key.id}</h2>
           <h2 >{key.countryname}</h2>
           <img src={key.image.uri} />
         </div>
       );
     })}



    </>
  );
    
}
export default Home3;