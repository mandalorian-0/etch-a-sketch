let container = document.querySelector("#container")

const GRIDSIZE = 16
let totalCells = GRIDSIZE * GRIDSIZE

const goToNewLine = () => {

    let newLine = document.createElement("div")
    newLine.classList.add("break")
    container.appendChild(newLine)

}

const createCells = () => {
    for( let i = 0; i < totalCells; i++ ) {

        let cell = document.createElement("div")

        cell.classList.add("styled")

        container.appendChild(cell)

        if( (i + 1) % GRIDSIZE === 0) {
            goToNewLine()
        }
    }
}

createCells()

for(let cell of container.childNodes){
    cell.addEventListener('mouseover', (e) => {
        e.target.style.background = 'blue'
    })
}
