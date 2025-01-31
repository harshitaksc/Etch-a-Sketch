const container = document.querySelector("#container");

// Take input of the grid number user desires
let grid = parseInt(prompt("How many grids do you want?"), 10);

if (isNaN(grid) || grid < 1 || grid > 100) {
    alert("Invalid input! Using default grid size: 16.");
    grid = 16; 
}

console.log(grid);
for (let i=1; i <= grid*grid; i++){
    const div = document.createElement('div');
    container.appendChild(div);
    div.style.width = `${100 / grid}%`;
        
    }
   

const paint = container.childNodes;
// console.log(paint);



paint.forEach(el => el.addEventListener('mouseover', event => {
    el.style.backgroundColor = "chocolate";
    
  }));
  

    

    
   