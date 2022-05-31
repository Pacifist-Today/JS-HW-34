"use strict"

const createTable = function (rows, cells) {
    const tableGeneration = function (rowsAdding) {
        let counter = 1
        for (let i = 0; i < rows; i++) {
            let trCreating = document.createElement("tr")
            rowsAdding.append(trCreating)
            for (let c = 0; c < cells; c++) {
                let tdCreating = document.createElement("td")
                tdCreating.innerHTML = `${counter++}`
                trCreating.append(tdCreating)
            }
        }
        return rowsAdding
    }
    return tableGeneration(document.createElement("table"))
}

const tableArguments = createTable(10, 10)
document.body.append(tableArguments)