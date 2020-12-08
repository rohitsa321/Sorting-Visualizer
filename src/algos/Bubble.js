/* created  by:- Rohit Sahu
  github      :- https://github.com/rohitsa321*/
async function Bubble(array,arraySize,arraySpeed){
  
    const bar=document.getElementsByClassName("bar");
    
    if(bar[0]==null){
      alert("select size!");
    }else{
     //disabling
    const range=document.getElementsByClassName("input");
    var k;
    for(k=0;k<range.length;k++){
      range[k].disabled=true;
    }
    const button=document.getElementsByClassName("buttons");
    for( k=0;k<button.length;k++){
      button[k].disabled=true;
    }
  
    let i=0;
    let j=0;
    let delay;
    if(arraySpeed===100){delay=5;}else if(arraySpeed===50){delay=100;}else if(arraySpeed===75){delay=20;}else{delay=50;}
  
     for(i=0;i<arraySize-1;i++){
       for( j=0;j<arraySize-1-i;j++){
               //while comparing
               bar[j].style.backgroundColor="rgb(235, 235, 95)";//yellow
               bar[j+1].style.backgroundColor="rgb(235, 235, 95)";//yellow
               await new Promise(resolve => setTimeout(resolve, (delay*1)));//just for waiting
                  
               if(array[j]>array[j+1]){
                   [array[j],array[j+1]]=  [array[j+1],array[j]];
                   [bar[j].style.height,bar[j+1].style.height]=[bar[j+1].style.height,bar[j].style.height];
                   //after swapped
                   bar[j].style.backgroundColor="lightgreen";
                   bar[j+1].style.backgroundColor="lightgreen";
                   await new Promise(resolve => setTimeout(resolve, (delay*2)));
                   
                  }else{
                     //comparison went wrong
                     bar[j].style.backgroundColor="red";
                     bar[j+1].style.backgroundColor="red";
                      await new Promise(resolve => setTimeout(resolve, (delay*2)));
                  }
                      bar[j].style.backgroundColor="rgb(181, 132, 245, 0.945)";//intial 
                      bar[j+1].style.backgroundColor="rgb(181, 132, 245, 0.945)";//initial
          }
          bar[arraySize-1-i].style.background="rgb(31, 200, 223)";//blue
        }
      bar[0].style.background="rgb(31, 200, 223)";//blue
 
     for(k=0;k<range.length;k++){
      range[k].disabled=false;
    }
    for( k=0;k<button.length;k++){
      button[k].disabled=false;
    }
     }
}
export default Bubble;