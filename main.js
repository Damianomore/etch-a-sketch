const gridContainer = document.querySelector('.grid-container');
const gridSlider = document.querySelector('#gridSlider');
let divList = undefined;
let gridNum = 10;
const isHover = e => e.querySelector(':hover') === e;    

gridContainer.style=`display: grid;grid-template-columns:repeat(${gridNum},auto);grid-template-rows: repeat(${gridNum},auto);`;

gridSlider.addEventListener('input', () => {
    gridNum = gridSlider.value;
    gridContainer.style=`display: grid;grid-template-columns:repeat(${gridNum},auto);grid-template-rows: repeat(${gridNum},auto);`;
    console.log(gridNum);
    divList = document.querySelectorAll('.gridDiv');
    divList.forEach(grid => {
        grid.remove();
    });
    initGrid();
})
function initGrid(){
    for (let index = 0; index < gridNum * gridNum; index++) {
        let newDiv = document.createElement("div");
        newDiv.className="gridDiv";
        let paddingNum = 40/gridNum;
        newDiv.style = `outline: solid 1px rgba(0, 0, 0, 0.5);padding: ${paddingNum/2}rem;`;
        newDiv.style.transition = "all 0.3s ease-in 0s";

        newDiv.addEventListener('mousemove', function checkHover() {
            const hovered = isHover(newDiv);
            if(hovered !== checkHover.hovered) {
                newDiv.style.backgroundColor = "pink";
                //checkHover.hovered = hovered;
            }
        })

        gridContainer.appendChild(newDiv);
    }
}

