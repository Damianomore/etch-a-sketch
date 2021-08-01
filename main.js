const gridContainer = document.querySelector('.grid-container');
const gridSlider = document.querySelector('#gridSlider');
const preview = document.querySelector('#rgb-preview');
const rLabel = document.querySelector('#red-label');
const gLabel = document.querySelector('#green-label');
const bLabel = document.querySelector('#blue-label');
const sizeLabel = document.querySelector('#grid-size-label');
const r = document.querySelector('#R');
const g = document.querySelector('#G');
const b = document.querySelector('#B');
const rbBtn = document.querySelector('#rainbow-toggle');
let rbToggle = false, erToggle = false, clToggle = false; 
let rVal = 0, gVal = 0, bVal = 0;
const isHover = e => e.querySelector(':hover') === e;    
let divList = undefined;
let gridNum = 0;


rbBtn.addEventListener('click', () => {
    if(rbToggle === true) {
        rbToggle = false;
        return;
    }

    rbToggle = true;
})

r.addEventListener('input', () => {
    rVal = r.value;
    preview.style.backgroundColor = `rgb(${rVal}, ${gVal}, ${bVal})`
    rLabel.innerHTML = `Red: ${rVal}`;
})
g.addEventListener('input', () => {
    gVal = g.value;
    preview.style.backgroundColor = `rgb(${rVal}, ${gVal}, ${bVal})`;
    gLabel.innerHTML = `Green: ${gVal}`;

})
b.addEventListener('input', () => {
    bVal = b.value;
    preview.style.backgroundColor = `rgb(${rVal}, ${gVal}, ${bVal})`;
    bLabel.innerHTML = `Blue: ${bVal}`;

})
gridSlider.addEventListener('input', () => {
    gridNum = gridSlider.value;
    gridContainer.style=`display: grid;grid-template-columns:repeat(${gridNum},auto);grid-template-rows: repeat(${gridNum},auto);`;
    console.log(gridNum);
    divList = document.querySelectorAll('.gridDiv');
    divList.forEach(grid => {
        grid.remove();
    });
    sizeLabel.innerHTML = `Grid Size: ${gridNum}x${gridNum}`;
    initGrid();
})


function initGrid(){
    for (let index = 0; index < gridNum * gridNum; index++) {
        let newDiv = document.createElement("div");
        newDiv.className="gridDiv";
        let paddingNum = 40/gridNum;
        newDiv.style = `padding: ${paddingNum/2}rem;`;
        newDiv.style.transition = "all 0.3s ease-in 0s";

        newDiv.addEventListener('mousemove', function checkHover() {
            if(rbToggle === true) {
                console.log("set");
                newDiv.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
            }
            else { 
                const hovered = isHover(newDiv);
                if(hovered !== checkHover.hovered) {
                    newDiv.style.backgroundColor = `rgb(${rVal}, ${gVal}, ${bVal})`;
                    //checkHover.hovered = hovered;
                }
            }
        })

        gridContainer.appendChild(newDiv);
    }
}

