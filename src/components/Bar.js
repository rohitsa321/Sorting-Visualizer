/* created  by:- Rohit Sahu
  github      :- https://github.com/rohitsa321*/
import React from 'react'
import "./Bar.css"
function Bar(props) {
   
  //   var marginLeft=props.width/4;
  //   var fontSize=props.width/6;

    return (
           <div className="bar"
         style={{
             "height":props.height,
             "width":props.width,
             }}
       >
       </div>
       
    )
}

export default Bar
