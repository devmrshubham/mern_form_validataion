import React from "react";
import Register from "./Components/Register";
import { Route,Routes } from "react-router-dom";
import Login from "./Components/Login";
import AddBlog from "./Components/AddBlog";


const App = () => {
  return (
    <>
    
    <Routes>
      <Route path="/login"  element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/blog" element={<AddBlog/>}/>
    </Routes>
    

    </>
  );
};

export default App;
