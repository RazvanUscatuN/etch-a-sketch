const mainContainer = document.querySelector(".grid-container");


function drawBoxes(sizeOfBoxes){
  // Because will always take square values like 16x16,32x32 for column and rows
  // Only require 1 parameter

  // to find the individual dimensions for each box in %
  let boxDimensions = 100/sizeOfBoxes;

  for(let i = 0; i < sizeOfBoxes; i++){
    for(let j = 0; j < sizeOfBoxes; j++){
      const divBox = document.createElement("div");

      divBox.style.minWidth = `${boxDimensions}%`;
      divBox.style.minHeight = `${boxDimensions}%`;
      divBox.style.outline = "1px solid lightblue";

      divBox.setAttribute("class", "box-active")

      mainContainer.appendChild(divBox);

    } 
  }


  //Drawing logic with hover effect
  const hoverEffect = document.querySelectorAll(".box-active");

  for (let elem of hoverEffect){
    elem.addEventListener("mouseenter",function(){
      elem.style.backgroundColor = "#559AED"; //~lightblue
    })
  }
}


function deleteBoxes(){
  const boxes = document.querySelectorAll(".box-active");
  for(let box of boxes){
    box.remove();
  }

}


//Slider logic - update the value when change
const sizeSlider = document.querySelector(".size-slider");
const outputSlider = document.querySelector(".output-slider");
const secondOutput = document.querySelector(".second-output");

outputSlider.textContent = sizeSlider.value;

sizeSlider.addEventListener("input", (event)=>{
  outputSlider.textContent = event.target.value;
  secondOutput.innerText = event.target.value;
  
  //when update delete the boxes and create new ones 
  deleteBoxes();
  drawBoxes(event.target.value);

  const boxes = document.querySelectorAll(".box-active");
  for(let box of boxes){
    if(outlineShown){
      box.style.outline = "1px solid lightblue";
    }else{
      box.style.outline = "none";
    }
  }
  
})


//Grid Btn logic

const btnGrid = document.querySelector(".btn-grid");
let outlineShown = true;

btnGrid.addEventListener("click",function(){
  const boxes = document.querySelectorAll(".box-active");
  
  for(let box of boxes) {
    //check if outline is apply
    if(outlineShown){
      box.style.outline = "none";
    }else{
      box.style.outline = "1px solid lightblue";
    }
  }

  outlineShown = !outlineShown;
});

 
//Reset btn logic

const resetBtn = document.querySelector(".redraw-button");
drawBoxes(outputSlider.innerText);

resetBtn.addEventListener("click", function(){
  deleteBoxes();
  drawBoxes(outputSlider.innerText);

  const boxes = document.querySelectorAll(".box-active");

  //check if outline is apply to keep the same style
  for(let box of boxes){
    if(outlineShown){
      box.style.outline = "1px solid lightblue";
    }else{
      box.style.outline = "none";
    }
  }
})

