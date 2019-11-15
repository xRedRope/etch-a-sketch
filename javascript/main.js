
let opac = 0.0;
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

function buildGridColor(number) {
    let squareNumber = number * number;
    myGrid.setAttribute("style", "grid-template-columns : repeat("+ number + ",1fr); grid-template-rows : repeat("+ number + ", 1fr)")
    for (let i = 1; i <= squareNumber; i++){
        const newCell = document.createElement("div");
        newCell.setAttribute("class", "cell");
        newCell.setAttribute("id", i);
        newCell.setAttribute("onmouseover", "rdmColorBg()");
        myGrid.appendChild(newCell);
    }
}

function buildGridOpacity(number) {
    
    let squareNumber = number * number;
    myGrid.setAttribute("style", "grid-template-columns : repeat("+ number + ",1fr); grid-template-rows : repeat("+ number + ", 1fr)")
    for (let i = 1; i <= squareNumber; i++){
        const newCell = document.createElement("div");
        newCell.setAttribute("class", "cell opac");
        newCell.setAttribute("id", i);
        newCell.setAttribute("onmouseover", "opacityBg()");
        myGrid.appendChild(newCell);
    }
}


buildGrid(20);

gridCells = document.querySelectorAll(".cell");

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function rdmColorBg(){
    document.getElementById(event.target.id).setAttribute('style', 'background-color: '+ getRandomColor());
}

function blackBg() {
    document.getElementById(event.target.id).setAttribute('style', 'background-color: black');
}
let info;
function opacityBg() {
    cellClass = document.getElementById(event.target.id).getAttribute("class");

    if (cellClass == "changed cell") {
        document.getElementById(event.target.id).setAttribute('style', ' background-color: hsl(0, 0%, '+80+'%)');
        document.getElementById(event.target.id).setAttribute('class', 'changedOne cell');

    }else if (cellClass == "changedOne cell"){
        document.getElementById(event.target.id).setAttribute('style', ' background-color: hsl(0, 0%, '+70+'%)');
        document.getElementById(event.target.id).setAttribute('class', 'changedTwo cell');
    }else if (cellClass == "changedTwo cell"){
        document.getElementById(event.target.id).setAttribute('style', ' background-color: hsl(0, 0%, '+60+'%)');
        document.getElementById(event.target.id).setAttribute('class', 'changedThree cell');
    }else if (cellClass == "changedThree cell"){
        document.getElementById(event.target.id).setAttribute('style', ' background-color: hsl(0, 0%, '+50+'%)');
        document.getElementById(event.target.id).setAttribute('class', 'changedFour cell');
    }else if (cellClass == "changedFour cell"){
        document.getElementById(event.target.id).setAttribute('style', ' background-color: hsl(0, 0%, '+40+'%)');
        document.getElementById(event.target.id).setAttribute('class', 'changedFive cell');
    }else if (cellClass == "changedFive cell"){
        document.getElementById(event.target.id).setAttribute('style', ' background-color: hsl(0, 0%, '+30+'%)');
        document.getElementById(event.target.id).setAttribute('class', 'changedSix cell');
    }else if (cellClass == "changedSix cell"){
        document.getElementById(event.target.id).setAttribute('style', ' background-color: hsl(0, 0%, '+20+'%)');
        document.getElementById(event.target.id).setAttribute('class', 'changedSeven cell');
    }else if (cellClass == "changedSeven cell"){
        document.getElementById(event.target.id).setAttribute('style', ' background-color: hsl(0, 0%, '+10+'%)');
        document.getElementById(event.target.id).setAttribute('class', 'changedEight cell');
    }else if (cellClass == "changedEight cell"){
        document.getElementById(event.target.id).setAttribute('style', ' background-color: hsl(0, 0%, '+0+'%)');
        document.getElementById(event.target.id).setAttribute('class', 'changedNine cell');
    }else if (cellClass == "changedNine cell"){
        document.getElementById(event.target.id).setAttribute('style', ' background-color: hsl(0, 0%, '+0+'%)');
    }
    else{ 
        document.getElementById(event.target.id).setAttribute('style', ' background-color: hsl(0, 0%, '+90+'%)');
        document.getElementById(event.target.id).setAttribute('class', 'changed cell');
    }
    
    
    
   
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
    reset();
    buildGrid(num);
}

function newColorGrid(){
    let num = prompt("Size of new grid :");
    reset();
    buildGridColor(num);
}

function newOpacityGrid(){
    let num = prompt("Size of new grid :");
    reset();
    buildGridOpacity(num);
}