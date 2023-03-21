import './App.css';
import React, { Component } from "react";
import Header from './components/header/header';
import Lastnews from './components/lastnews/lastnews';
import Aboutus from './components/about-us/about-us';
import Footer from './components/footer/footer';


function App() {
  return (
    <>
<div className="container-fluid">

<Header/>
<Lastnews/>
<Aboutus/>
<Footer/>


</div>
</>
  );
}

export default App;
