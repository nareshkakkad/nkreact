import React,{ useState } from 'react';

function countIntialise(){
console.log("run function single or multiple");
return 0;
}

function Formlist() {
  // increment Count start
  const [count,setCount]=useState( () => countIntialise());

  function decrementCount(){
    setCount(count-1)
  }
  function incrementCount(){
    setCount(count+1)
  }
// increment Count end


  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [mobile,setMobile]=useState("");

  return (
    <div>
      
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>



      <form>
        <input type="text" value={name} placeholder="Enter name" onChange={(e)=>setName(e.target.value)} />
        <br></br>
        <input type="text" value={email} placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
        <br></br>
        <input type="text" value={password} placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)}/>
        <br></br>
        <input type="text" value={mobile} placeholder="Enter Mobile" onChange={(e)=>setMobile(e.target.value)}/>
        <br></br>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
}

export default Formlist