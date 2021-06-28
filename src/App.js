import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Navbar1 from './components/Navbar1';
import GlobalStyle from './GlobalStyle';
import Hero from './components/Hero';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import About from './components/About';
function App() {

  return (
    <>
   <Navbar1/>
   <Hero/>
   <About/>
<ContactUs/>
   </>
  );
}

export default App;
