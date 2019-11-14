const myGrid = document.querySelector(".grid");
function buildGrid(number){
    let squareNumber = number * number;
    myGrid.setAttribute("style", "grid-template-columns : repeat("+ number + ",1fr); grid-template-rows : repeat("+ number + ", 1fr)")
    for (let i = 1; i <= squareNumber; i++){
        const myGridDiv = document.createElement("div");
        myGridDiv.textContent = i;
        myGridDiv.classList.add("box");
        myGridDiv.setAttribute("id", i);
        myGrid.appendChild(myGridDiv);
    }
}


const myDiv = document.querySelectorAll(".box");

//const test = document.querySelector("#5");
//test.addEventListener('onclick', () => {
//    alert(test.id);
//});

myDiv[8].style.backgroundColor = "red";
myDiv.forEach((div) => {
    div.addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = "blue";
    });
});    
myDiv.addEventListener("mouseenter", function(e){
    e.target.style.backgroundColor = "blue";
});

const reset = document.querySelector(".reset");

reset.onclick = () => alert("suh up");