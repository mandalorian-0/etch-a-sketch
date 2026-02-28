let container = document.querySelector("#container")
let button = document.querySelector("button")

const goToNewLine = () => {

    let newLine = document.createElement("div")
    newLine.classList.add("break")
    container.appendChild(newLine)

}

const addEventToCell = (pad) => {
    for(let cell of pad.childNodes){
        cell.addEventListener('mouseover', (e) => {
            e.target.classList.add('pixelated-effect')
    })
}
}

const clearSketchPad = (pad) => {
    for(let cell of pad) {
        pad.removeChild(cell)
    }
} 

const createCells = (pad, gridSize = 16) => {
    for( let i = 0; i < gridSize * gridSize; i++ ) {

        let cell = document.createElement("div")

        cell.classList.add("styled")

        pad.appendChild(cell)

        if( (i + 1) % gridSize === 0) {
            goToNewLine()
        }
    }

    addEventToCell(pad)
}

createCells(container)



button.addEventListener('click', (e) => {
    
    e.preventDefault()
    let gridSize = prompt("Specify the grid size")

    if(gridSize != null) {
        if (parseInt(gridSize) > 100) {
            alert("Grid size should be an integer less or equal to 100")
        }
        else{
            clearSketchPad(container)
            // createCells(gridSize)
        }
    }
    else {
        return
    }


})