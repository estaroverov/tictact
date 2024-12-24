const cells = document.getElementsByClassName("cell");
let cellValue = "X";
var cellValues = [];

cellValues = initCellValues(cellValues, cells);

for (let i = 0; i < cells.length; i++) {

    cells[i].addEventListener('click', function (e) {
        cells[i].innerText = cellValue;
        cellValues[i] = cellValue;
        cellValue = cellValue === "X" ? "0" : "X";
        if (CheckingLines(cellValues, cellValue)) {
            ClearValues(cells);
            cellValues = initCellValues(cellValues, cells)
            cellValue = "X";
        }

    })
};

function CheckingLines(cellValues, cellValue) {
    let win = false;
    let draw = false;
    cellValue = cellValue == "X" ? "0" : "X";
    for (let i = 0; i < cellValues.length; i++) {
        if (cellValues[i] != "") {

            if (i == cellValues.length - 1) {
                draw = true;
                alert("DRAW!");
            }
        }
        else {
            break;
        }
    }

    if (cellValues[0] == cellValues[1] && cellValues[0] == cellValues[2] && cellValues[0] != "") {
        alert(cellValue + " wins!")
        win = true;
    }

    if (cellValues[3] == cellValues[4] && cellValues[3] == cellValues[5] && cellValues[3] != "") {
        alert(cellValue + " wins!")
        win = true;
    }

    if (cellValues[6] == cellValues[7] && cellValues[6] == cellValues[8] && cellValues[6] != "") {
        alert(cellValue + " wins!")
        win = true;
    }
    if (cellValues[0] == cellValues[3] && cellValues[0] == cellValues[6] && cellValues[0] != "") {
        alert(cellValue + " wins!")
        win = true;
    }
    if (cellValues[1] == cellValues[4] && cellValues[1] == cellValues[7] && cellValues[1] != "") {
        alert(cellValue + " wins!")
        win = true;
    }
    if (cellValues[2] == cellValues[5] && cellValues[2] == cellValues[8] && cellValues[2] != "") {
        alert(cellValue + " wins!")
        win = true;
    }
    if (cellValues[0] == cellValues[4] && cellValues[0] == cellValues[8] && cellValues[0] != "") {
        alert(cellValue + " wins!")
        win = true;
    }
    if (cellValues[2] == cellValues[4] && cellValues[2] == cellValues[6] && cellValues[2] != "") {
        alert(cellValue + " wins!")
        win = true;
    }

    return draw == true ? draw : win;
}

function ClearValues(cells) {
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = "";
    }
}

function initCellValues(cellValues, cells) {
    for (let i = 0; i < cells.length; i++) {
        cellValues[i] = "";
    }
    return cellValues;
}