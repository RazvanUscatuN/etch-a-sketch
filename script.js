const mainContainer = document.querySelector(".grid-container");


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

function deleteBoxes(){
  const boxes = document.querySelectorAll(".box-active");
  for(let box of boxes){
    box.remove();
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

//TODO create a input button type range for the size of boxes

const sizeSlider = document.querySelector(".size-slider");
const outputSlider = document.querySelector(".output-slider");

outputSlider.textContent = sizeSlider.value;

sizeSlider.addEventListener("input", (event)=>{
  outputSlider.textContent = event.target.value;
})

 
//TODO apply button where redraw the boxes

const applyButton = document.querySelector(".redraw-button");

applyButton.addEventListener("click", function(){
  deleteBoxes();
  drawBoxes(outputSlider.innerText);
  console.log(outputSlider.innerText);
})


//TODO a reset button to reset the current drawing(clear button)
//TODO make a color piker button that let you choose the color of the pen
//TODO get rid of grid with taking care of outline from drawing boxes

