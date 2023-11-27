const mainContainer = document.querySelector(".container");


//create a for loop that create div boxes 

for(let i = 0; i < 16; i++){
  for(let j = 0; j < 16; j++){
    const divBox = document.createElement("div");
    divBox.style.backgroundColor = "red";
    divBox.style.minWidth = "40px";
    divBox.style.height = "40px";
    divBox.style.border = "1px solid";
    divBox.setAttribute("class", "box-active")
   
    mainContainer.appendChild(divBox);
  }
  
}
