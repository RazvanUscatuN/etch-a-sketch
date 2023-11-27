const mainContainer = document.querySelector(".container");


function drawBoxes(sizeOfBoxes){
  // Because will always take square values like 16x16,32x32 for column and rows
  // Only require 1 parameter

  // to find the individual dimensions for each box in %
  let boxDimensions = 100/sizeOfBoxes;

  for(let i = 0; i < sizeOfBoxes; i++){
    for(let j = 0; j < sizeOfBoxes; j++){
      const divBox = document.createElement("div");
      divBox.style.backgroundColor = "red";

      divBox.style.minWidth = `${boxDimensions}%`;
      divBox.style.minHeight = `${boxDimensions}%`;
      divBox.style.outline = "1px solid";
      divBox.setAttribute("class", "box-active")

      mainContainer.appendChild(divBox);

    }
  }
}

drawBoxes(16);

//hover effect 
const hoverEffect = document.querySelectorAll(".box-active");

for (let elem of hoverEffect){
  elem.addEventListener("mouseenter",function(){
    elem.style.backgroundColor = "green";
  })
}

