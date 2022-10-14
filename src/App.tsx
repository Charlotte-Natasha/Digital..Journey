import React from 'react';
import About from "./components/About";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Home from "./components/Home";
import Socials from "./components/Socials";
import Contact from "./components/Contact";

function App() {
  return (
    <div >
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      <Socials/>
    </div>
  );
}

export default App;
