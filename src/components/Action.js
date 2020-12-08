/* created  by:- Rohit Sahu
  github      :- https://github.com/rohitsa321*/
import React, { useState, useEffect } from 'react'
import Bar from './Bar'
import "./Action.css"


function Action(props) {
  
     
     const [width,setWidth]=useState("") //only one value 
     
      
     useEffect(() => {
         setWidth(1200/props.arraySize);
     },[props])
  
    
    return (
        <div className="action">
          {
             props.array.map((height,index)=>(
               <Bar height={height}  width={width} arraySize={props.arraySize} key={index} />
             ))
            } 
        </div>
    )
}
 export default Action
