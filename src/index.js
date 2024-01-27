

import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import { userContext, myData } from './pages/useContext';
import Header from "./pages/header";
import Footer from "./pages/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import Login from "./pages/login";
import Detail from "./pages/detail";
import List from "./pages/list";
import Dashbord from "./pages/dashbord";
import Sidebar from "./pages/profile";
import Profile from "./pages/profile";
import LoginForm from './pages/myprofile';
import Home1 from './pages/api';
import Home3 from './pages/effect';
import Register from './pages/register';
import CompanyDetail from './pages/company-list';
import CatagoryList from './pages/catagory-list';
import ChangePassword from './pages/password';
// import StarRating from './pages/star';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   
   <userContext.Provider value={myData}  >

<Router>
   <Header />
   <Routes>
     <Route path="/">
       <Route index path="/" element={<Home />} />
        <Route index path="/about" element={<About />} />  
       <Route index path="/contact" element={<Contact />} /> 
        <Route index path="/login" element={<Login />} /> 
        <Route index path="/category/:cateurl" element={<CatagoryList />} /> 
        <Route index path="/c/:pageurl" element={<Detail />} /> 
        <Route index path="/detail" element={<Detail />} /> 
        <Route index path="/list" element={<List />} /> 
        <Route index path="/dashbord" element={<Dashbord />} /> 
        <Route index path="/profile" element={<Sidebar />} /> 
        <Route index path="/profile" element={<Profile />} /> 
        <Route index path="/myprofile" element={<LoginForm />} /> 
        <Route index path="/api" element={<Home1 />} /> 
        <Route index path="/effect" element={<Home3 />} /> 
        <Route index path="/register" element={<Register />} /> 
        <Route index path="/blog" element={<Blog />} /> 
        <Route index path="/c/:pageurl" element={<CompanyDetail />} /> 
        {/* <Route index path="/company-list" element={<CompanyDetail />} />  */}
        <Route index path="/company-list/:pageurl" element={<CompanyDetail />} /> 
        {/* <Route index path="/catagory-list" element={<CatagoryList/>} /> */}
        <Route index path="/catagory-list/:cateurl" element={<CatagoryList/>} />
        <Route index path="/password" element={<ChangePassword/>} />
      
        <Route index path="/:companyurl" element={<CompanyDetail />} /> 
     </Route>
   </Routes>


   <Footer />
 </Router>
 </userContext.Provider>

  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
