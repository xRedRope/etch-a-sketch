

const number = 32;
const grid = document.querySelector(".grid");
grid.style.display = "grid";
grid.style.border = "1px solid black";
grid.style.gridTemplateRows = "repeat((nuber/2), 1fr)";
grid.style.gridTemplateColumns = "repeat((number/2), 1fr)";
for(let i=0; i < number; i++){
    const divGrid = document.createElement("div");
    divGrid.classList.add("case");
    grid.appendChild(divGrid);
}
const gridCase = document.getElementsByClassName("case");
gridCase.style.border = "1px solid blue";

