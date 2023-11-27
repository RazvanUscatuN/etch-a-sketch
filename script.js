const mainContainer = document.querySelector(".container");


//create a for loop that create div boxes 

for(let i = 0; i < 16; i++){
  for(let j = 0; j < 16; j++){
    const divBox = document.createElement("div");
    divBox.style.backgroundColor = "red";
    
    divBox.style.minWidth = `6`;
    divBox.style.minHeight = "6%";
    divBox.style.outline = "1px solid";
    divBox.setAttribute("class", "box-active")
   
    mainContainer.appendChild(divBox);
  }
  
}


//hover effect 
const hoverEffect = document.querySelectorAll(".box-active");

for (let elem of hoverEffect){
  elem.addEventListener("mouseenter",function(){
    elem.style.backgroundColor = "green";
  })
}

