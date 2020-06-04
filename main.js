const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")
const rowElements = document.querySelectorAll(".row")

function getCellElements(currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}

replaceAllButton.addEventListener("click", function () {
    let userInput = findInput.value
    let replacementInput = replaceInput.value

    for (let counter = 0; counter < rowElements.length; counter = counter + 1) {
        let currentRowElement = rowElements[counter]
        let currentRowElementCellElements = getCellElements(currentRowElement)

        for (let counter1 = 0; counter1 < currentRowElementCellElements.length; counter1 = counter1 + 1) {
            let currentCellElements = currentRowElementCellElements[counter1]
            let currentCellItems = currentCellElements.innerHTML
            if (currentCellItems.includes(userInput)) {
                console.log("FOUND", currentCellItems)
                currentCellElements.innerHTML = currentCellItems.replace(userInput, replacementInput)
            } else {

            }

        }

    }
})