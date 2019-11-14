const number = 256;
const myGrid = document.querySelector(".grid");

for (let i = 1; i <= number; i++){
    const myGridDiv = document.createElement("div");
    myGridDiv.textContent = i;
    myGridDiv.classList.add("box");
    myGridDiv.setAttribute("id", i);
    myGrid.appendChild(myGridDiv);
}

const myDiv = document.querySelectorAll(".box");

//const test = document.querySelector("#5");
//test.addEventListener('onclick', () => {
//    alert(test.id);
//});

myDiv[number-1].style.backgroundColor = "red";
myDiv.forEach((div) => {
    div.addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = "blue";
    });
});    
myDiv.addEventListener("mouseenter", function(e){
    e.target.style.backgroundColor = "blue";
});
