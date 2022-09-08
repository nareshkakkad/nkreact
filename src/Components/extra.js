     
function Abc() {  
     
  const myArray = ['Jack', 'Mary', 'John', 'Krish', 'Navin'];  
    
  return (  
    <div className="container">     
        <h1> Example of React Map Loop </h1>  
     
        {myArray.map(name => (  
          <li>  
            {name}  
          </li>  
        ))}  
     
    </div>  
  );  
}  
     
Abc()  