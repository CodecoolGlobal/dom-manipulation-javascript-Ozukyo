function fillGridWithCells() {
    let container = document.querySelector(".container");
    const cell = function () {
        let c = document.createElement("div");
        c.setAttribute("class", "cell");
        return c;
    }
    for (let i = 0; i < 10 * 10; i++) {
        container.appendChild(cell());
    }
}

function activateChangingColors() {
    console.log("active changing");
    let cellList = document.getElementsByClassName("cell");
    let randomCell = cellList[Math.floor(Math.random() * cellList.length)];
    switchColorOfCell(randomCell);
}

function switchColorOfCell(cell) {
    if(cell.className === "cell") {
        cell.setAttribute("class", "cell active");
    }
    else
    {
        cell.setAttribute("class" ,"cell");
    }
}

fillGridWithCells();
// activateChangingColors();
setInterval(activateChangingColors, 500);