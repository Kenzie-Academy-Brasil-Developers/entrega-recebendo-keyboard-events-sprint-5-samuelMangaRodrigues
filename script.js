const body=document.querySelector("body")
let div=document.createElement("div")

div.setAttribute("id","box")
body.appendChild(div)

let boxTop = 200;
let boxLeft = 200;
'use strict';
document.addEventListener('keydown', (event) => {
    let keyName = event.key;
    if(keyName==="ArrowDown"){
      boxTop+=10
      
    }
    if(keyName==="ArrowUp"){
      boxTop-=10
      
    }
    
    document.getElementById("box").style.top = boxTop + "px";
  });
  document.addEventListener("keydown",(evt)=>{
  
    let ketNN=evt.key
    if(ketNN==="ArrowLeft"){
     boxLeft-=10
    }
    if(ketNN==="ArrowRight"){
      boxLeft+=10
     }
    document.getElementById("box").style.left = boxLeft+"px";
  })