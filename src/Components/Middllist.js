import React from 'react'

export default function Middllist() {

const myVariable=[
    {
    srno:1,
    shortdec:"abc",
    decsription:"this is a description abc"
   },
   {
    srno:2,
    shortdec:"def",
    decsription:"this is a description def"
   },
   {
    srno:3,
    shortdec:"ghi",
    decsription:"this is a description ghi"
   }


];
const content = myVariable.map(listitem=>
 <div key={listitem.srno}>
    <h3>{listitem.shortdec}</h3>
    <p>{listitem.decsription}</p> 
 </div>
  
  );

  return (
    <div>{content}</div>
  )
}
