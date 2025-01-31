const container = document.querySelector("#container");

// Take input of the grid number user desires
let grid = parseInt(prompt("How many grids do you want?"), 10);

if (isNaN(grid) || grid < 1 || grid > 100) {
    alert("Invalid input! Using default grid size: 16.");
    grid = 16;
}


for (let i = 1; i <= grid * grid; i++) {
    const div = document.createElement('div');
    container.appendChild(div);
    div.style.width = `${100 / grid}%`;


}


const paint = container.querySelectorAll("div");
// console.log(paint);
//Randome color generator
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

paint.forEach(el => el.addEventListener('mouseover', event => {
    el.style.backgroundColor = getRandomColor();

}));

// Reset button event listener

const reset = document.createElement("button");
console.log(reset);
reset.textContent = "Reset!"
const buttonContainer = document.getElementById("button");
buttonContainer.appendChild(reset);

reset.addEventListener('click', () => {
    paint.forEach(el => el.style.backgroundColor = "beige");
});







