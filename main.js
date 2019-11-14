
let gridCells;
const myGrid = document.querySelector(".grid");
function buildGrid(number){
    let squareNumber = number * number;
    myGrid.setAttribute("style", "grid-template-columns : repeat("+ number + ",1fr); grid-template-rows : repeat("+ number + ", 1fr)")
    for (let i = 1; i <= squareNumber; i++){
        const newCell = document.createElement("div");
       
        newCell.classList.add("cell");
        newCell.setAttribute("id", i);
        newCell.setAttribute("onmouseover", "blackBg()");
        myGrid.appendChild(newCell);
    }
}

buildGrid(20);

gridCells = document.querySelectorAll(".cell");


function blackBg() {
    document.getElementById(event.target.id).setAttribute('style', 'background-color: black');
  }




