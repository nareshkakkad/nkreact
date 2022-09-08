import React from 'react';
import {Routes, Route } from 'react-router-dom';
import About from '../Components/About';
import Services from '../Components/Services';
import Home from '../Components/Home';
import Formlist from '../Components/Formlist';
import Form from '../Components/Form';
import Nopage from '../Components/Nopage';

export default function Middle() {
  var mystyle={
    fontSize:50,
    color:'#003300'
  }
  let cnt=5;
  return (
    <div className='container'>
      <br></br><br></br>
      <span style={mystyle}> Middle Page Content</span>
      <br></br><br></br>
      
     
  
      <Routes>    

          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Services" element={<Services />} /> 
          <Route path="Form" element={<Form />} /> 
          <Route path="Formlist" element={<Formlist />} /> 
          <Route path="*" element={<Nopage />} />
         

          {/* <Route path="/" element={<p>This is Home Page</p>} />
          <Route path="about" element={<p>This is about Page</p>} />
          <Route path="services" element={<p>This is services Page</p>} /> 
          <Route path="*" element={<p>This is No Page</p>} />
                   */}
       
        
     
   
       </Routes>

       <h1>{cnt === 1 ? 'True!' : 'False!'}</h1>  
    </div>
  )
}
