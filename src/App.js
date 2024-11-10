import "./App.css";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import TextForm from "./components/TextForm.js";
import Alert from "./components/Alert.js";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//test comment
function App() {
  const [mode, setmode] = useState("light");
  const [modename, setmodename] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert= (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const togglemode = () => {
    console.log("toggle dark mode");
    if (mode === "dark") {
      setmode("light");
      setmodename("dark");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Light mode has been enabled!','success');

    }
    else{
      setmode("dark");
      setmodename("light");
      document.body.style.backgroundColor = '#333333';
      document.body.style.color = 'white';
      showAlert('Dark mode has been enabled!','success');
    }
  }

  return (
    <>

      <BrowserRouter>
      <Navbar title="TextUtils" item1 = 'Home' item2 = 'About' mode = {mode} toggle = {togglemode} modename = {modename}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<TextForm Heading1='Input Text to examine' mode = {mode} modename = {modename} alert = {showAlert}/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<h1>Error 404</h1>}/>
        </Routes>
      </div>
      </BrowserRouter>
      
    </>
  );
}

export default App;
