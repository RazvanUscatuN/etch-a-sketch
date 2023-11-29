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

  //hover effect 
  const hoverEffect = document.querySelectorAll(".box-active");

  for (let elem of hoverEffect){
    elem.addEventListener("mouseenter",function(){
      elem.style.backgroundColor = "green";
    })
  }
}

function deleteBoxes(){
  const boxes = document.querySelectorAll(".box-active");
  for(let box of boxes){
    box.remove();
  }

}




//TODO create a input button type range for the size of boxes

const sizeSlider = document.querySelector(".size-slider");
const outputSlider = document.querySelector(".output-slider");

outputSlider.textContent = sizeSlider.value;

sizeSlider.addEventListener("input", (event)=>{
  outputSlider.textContent = event.target.value;
  deleteBoxes();
  drawBoxes(outputSlider.innerText);

  const boxes = document.querySelectorAll(".box-active");
  for(let box of boxes){
    if(outlineShown){
      box.style.outline = "1px solid";
    }else{
      box.style.outline = "none";
    }
  }


})



//TODO get rid of grid with taking care of outline from drawing boxes

const btnGrid = document.querySelector(".btn-grid");
let outlineShown = true;



btnGrid.addEventListener("click",function(){
  const boxes = document.querySelectorAll(".box-active");
  
  for(let box of boxes) {
    if(outlineShown){
      box.style.outline = "none";
    }else{
      box.style.outline = "1px solid";
    }
  }

  outlineShown = !outlineShown;

});


 
//TODO apply button where redraw the boxes

const resetBtn = document.querySelector(".redraw-button");
drawBoxes(outputSlider.innerText);

resetBtn.addEventListener("click", function(){
  deleteBoxes();
  drawBoxes(outputSlider.innerText);

  const boxes = document.querySelectorAll(".box-active");

  for(let box of boxes){
    if(outlineShown){
      box.style.outline = "1px solid";
    }else{
      box.style.outline = "none";
    }
  }

})


