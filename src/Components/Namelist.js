import React from 'react'
//import { BrowserRouter as Router } from 'react-router-dom' 
//import  Route  from 'react-router-dom/Route';



export default function Namelist() {
	const abc = ['Bruce', 'Clark', 'Diana'];
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map((number) => number * 2);
  //console.log(doubled);
    return (
     <div>
       {abc.map(test => <div id={test}>{test}</div>) }
       {numbers.map(num => <div id={num}>{num}</div>) }
       <h2>{doubled}</h2>    
     </div>
    )
}


