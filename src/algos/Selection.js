
 async function Selection(array,arraySize,arraySpeed){
    
    const ba=document.getElementsByClassName("bar");
    if(ba[0]==null){
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
    let delay;
    if(arraySpeed===100){delay=5;}else if(arraySpeed===50){delay=100;}else if(arraySpeed===75){delay=20;}else{delay=200;}
    
    let min_index,i;
    for(i=0;i<arraySize-1;i++){
              min_index=i;
               ba[min_index].style.backgroundColor="rgb(31, 200, 223)";//sorted
               await new Promise(resolve => setTimeout(resolve, (delay*0.1)));
           for(let j=i+1;j<arraySize;j++){ 
                ba[j].style.backgroundColor="rgb(235, 235, 95)";//yellow
                await new Promise(resolve => setTimeout(resolve, (delay*0.1)));
                 if (array[j] < array[min_index]){
                       ba[j].style.backgroundColor="lightgreen";
                       await new Promise(resolve => setTimeout(resolve, (delay*0.1)));
                       ba[min_index].style.backgroundColor="rgb(181, 132, 245, 0.945)";  //initial
                       await new Promise(resolve => setTimeout(resolve, (delay*0.1)));
                       min_index = j; 
                       ba[min_index].style.backgroundColor="rgb(31, 200, 223)";//sorted
                       await new Promise(resolve => setTimeout(resolve, (delay*0.1)));
                     }else{
                      ba[j].style.backgroundColor="rgb(181, 132, 245, 0.945)";//intial
                        }
            }
             ba[min_index].style.backgroundColor="lightgreen";
            await new Promise(resolve => setTimeout(resolve, (delay*0.1)));
            [array[min_index],array[i]]=[array[i],array[min_index]];
            [ba[min_index].style.height,ba[i].style.height]=[ba[i].style.height,ba[min_index].style.height];
             ba[min_index].style.backgroundColor="rgb(181, 132, 245, 0.945)";//intial
             ba[i].style.backgroundColor="rgb(31, 200, 223)"; //sorted
           await new Promise(resolve => setTimeout(resolve, (delay*0.1)));   
      }
       ba[arraySize-1].style.backgroundColor="rgb(31, 200, 223)";//sorted
       for(k=0;k<range.length;k++){
      range[k].disabled=false;
    }
    for( k=0;k<button.length;k++){
      button[k].disabled=false;
    }
    }
    
    
}  
export default Selection;