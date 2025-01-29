const container = document.querySelector("#container");

for (let i=1; i <= 256; i++){
    const div = document.createElement('div');
    container.appendChild(div);
    div.textContent = i;
    
    }

const paint = container.childNodes;
// console.log(paint);


paint.forEach(el => el.addEventListener('mouseover', event => {
    el.style.backgroundColor = "green";
  }));
  

    

    
   