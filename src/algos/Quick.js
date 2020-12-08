/* created  by:- Rohit Sahu
  github      :- https://github.com/rohitsa321*/

 async function partition(array, low, high, delay){
      
    
    let pivot=array[low];
    let  i=low+1;
    let j=low+1;
    const bar=document.getElementsByClassName("bar");
         //while comparing
              bar[low].style.backgroundColor="rgb(68, 38, 238, 0.945)";//skyblue for pivot
               await new Promise(resolve => setTimeout(resolve, (delay*2)));
            
                while(j<=high){
                     bar[j].style.backgroundColor="rgb(235, 235, 95)";//yellow
                     bar[low].style.backgroundColor="rgb(235, 235, 95)";//yellow pivot
                     await new Promise(resolve => setTimeout(resolve, (delay*1)));
                    if(array[j]<pivot){
                       [array[j],array[i]]=[array[i],array[j]];
                       [bar[j].style.height,bar[i].style.height]=[bar[i].style.height,bar[j].style.height];
                       // after swapped
                       bar[j].style.backgroundColor="lightgreen";
                       bar[i].style.backgroundColor="lightgreen";
                        bar[low].style.backgroundColor="rgb(68, 38, 238, 0.945)";//initial for pivot
                       await new Promise(resolve => setTimeout(resolve, (delay*1)));
                       bar[i].style.backgroundColor="rgb(181, 132, 245, 0.945)";//initial
                       bar[j].style.backgroundColor="rgb(181, 132, 245, 0.945)";//initial
                      
                        i++;
                    }else{
                         //comparison went wrong
                                 bar[j].style.backgroundColor="red";
                                 bar[low].style.backgroundColor="red";
                                 await new Promise(resolve => setTimeout(resolve, (delay*1)));
                                 bar[j].style.backgroundColor="rgb(181, 132, 245, 0.945)";//initial
                                 bar[low].style.backgroundColor="rgb(68, 38, 238, 0.945)";//initial for pivot

                      }   
                     j++;
                  }
     
    [array[i-1],array[low]]=[array[low],array[i-1]];
    [bar[i-1].style.height,bar[low].style.height]=[bar[low].style.height,bar[i-1].style.height];
         // after swapped
          bar[low].style.backgroundColor="lightgreen";
          bar[i-1].style.backgroundColor="lightgreen";
          await new Promise(resolve => setTimeout(resolve, (delay*1)));
          bar[low].style.backgroundColor="rgb(181, 132, 245, 0.945)";//pivot after exchanged
          bar[i-1].style.background="rgb(31, 200, 223)";//blue
     return i-1;
}

 async function quicksort(array, low, high, delay){
   const b=document.getElementsByClassName("bar");
    if(low<high){
        console.log("quick called");
      
        let pi=await partition(array, low, high, delay);  
        quicksort(array, low, pi-1, delay);
        quicksort(array, pi+1, high, delay); 
    }
    else{
      if(low>=0&&low===high){
      b[low].style.background="rgb(31, 200, 223)";//
      }else if(high>=0&&low>high){
      b[high].style.backgroundColor="rgb(31, 200, 223)";//blue
    }
  }
}
 

async function Quick(array,arraySize,arraySpeed){
    // do something
 

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
    if(arraySpeed===100){delay=5;}else if(arraySpeed===50){delay=100;}else if(arraySpeed===75){delay=20;}else{delay=100;}
    
    quicksort(array,0,arraySize-1,delay);
    for(k=0;k<range.length;k++){
      range[k].disabled=false;
    }
    for( k=0;k<button.length;k++){
      button[k].disabled=false;
    }
    }
}  
export default Quick;