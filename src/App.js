import { Route, Routes } from "react-router-dom";

import  Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Category from "./Component/Category";
import Footer from "./Component/Footer";
import Contact from "./Component/Contact";
import Detail from "./Component/Detail";
import Job_list from "./Component/Job_list";
import Register from "./Component/Register";
import Login from "./Component/Login";




function App() {
  return <>
  <Navbar/>
  <Routes>
      <Route path="/" element={<Home/>}></Route> 
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Category" element={<Category/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
      <Route path="/Detail" element={<Detail/>}></Route>
      <Route path="/Job_list" element={<Job_list/>}></Route>
      <Route path="/Register" element={<Register/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
  </Routes>
  <Footer/>
  </>
}
export default App;
