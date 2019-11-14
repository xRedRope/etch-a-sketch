
let gridCells;
const myGrid = document.querySelector(".grid");
function buildGrid(number){
    let squareNumber = number * number;
    myGrid.setAttribute("style", "grid-template-columns : repeat("+ number + ",1fr); grid-template-rows : repeat("+ number + ", 1fr)")
    for (let i = 1; i <= squareNumber; i++){
        const newCell = document.createElement("div");
        newCell.setAttribute("class", "cell");
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


function reset() {
    gridCells = document.querySelectorAll(".cell");
    let number =gridCells.length;
    for (let i = 1; i <= number; i++){
        let cell = document.getElementById(i);
        myGrid.removeChild(cell);
    }
}

function newGrid(){
    let num = prompt("Size of new grid :");
    reset()
    buildGrid(num);
    console.log("build")
}