import React  from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Namelist from './Components/Namelist';
import Middllist from './Components/Middllist';
import Middle from './Components/Middle';
import Formlist from './Components/Formlist';
import Form from './Components/Form';
import Footer from './Components/Footer';


function App() {
  //let myVariable="this is list";

  return (
    <>
    <BrowserRouter>
    <Navbar title="NK Project" searchBar={true}/>
    <Middle/>       
    </BrowserRouter>

    <Namelist/>  
    <Middllist/> 
     <Form/> 
    <Formlist/>
    <Footer/>
  
    
     
        
   
    </>
  );
}



export default App;
