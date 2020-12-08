/* created  by:- Rohit Sahu
  github      :- https://github.com/rohitsa321*/


import React, {   useState, useEffect } from 'react';

import Action from './components/Action';
import './App.css';
import Bubble from './algos/Bubble';
import Quick from './algos/Quick';
import Selection from './algos/Selection';
function App() {
  
  const [arraySize,setArraySize]=useState(10); 
  const [arraySpeed,setArraySpeed]=useState(100); 
  const array=[];
  
 
  useEffect(() => {
    for(var i=1;i<=arraySize;i++){ 
      var val= Math.floor((Math.random()*500));
      val>10?array.push(val):array.push(20);
    }
  }, [arraySize,array])


  
  //when reset button clicked
  const onResetButton=()=>{ 
     window.location.reload();
  }


  return (
    <div className="App">
       
        <div className="head">
           <div className="top">
              <button className="resetbutton" onClick={onResetButton} >
                Reset
             </button>
              <p >Speed: 
                 <input  className="input" defaultValue="100" type="range" step="25" min="25" max="100" onChange={(event)=>setArraySpeed(event.target.value)} ></input>
             </p>
             <p >Select array size: 
                 <input  className="input" defaultValue="10" type="range" step="10" min="10" max="300" onChange={(event)=>setArraySize(event.target.value)} ></input>
             </p>
            <button className="buttons"  onClick={()=>{Bubble(array,arraySize,arraySpeed)}}>
               Bubble Sort
            </button>
            <button className="buttons" onClick={()=>Quick(array,arraySize,arraySpeed)} >
               Quick Sort
            </button>
            <button className="buttons" onClick={()=>Selection(array,arraySize,arraySpeed)}>
               Selection Sort
            </button>
          </div>
        </div>

        <div className="container">  

                <div className="container_middle">
                 <Action arraySpeed={arraySpeed} arraySize={arraySize} array={array} />
                </div>

        </div> 
      
    </div>
  );
}

export default App;
