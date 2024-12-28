// const cells = document.getElementsByClassName("cell");
// let cellValue = "X";
// var cellValues = [];

// cellValues = initCellValues(cellValues, cells);

// for (let i = 0; i < cells.length; i++) {

//     cells[i].addEventListener('click', function (e) {
//         //cells[i].innerText = cellValue;
//         cellValues[i] = cellValue;
//         cellValue = cellValue === "X" ? "0" : "X";
//         if (CheckingLines(cellValues, cellValue)) {
//             ClearValues(cells);
//             cellValues = initCellValues(cellValues, cells)
//             cellValue = "X";
//         }

//     })
// };

export function CheckingLines(cellValues, cellValue) {
    let win = false;
    let draw = false;
    // cellValue = cellValue == "X" ? "0" : "X";


    if (cellValues[0] == cellValues[1] && cellValues[0] == cellValues[2] && cellValues[0] != "") {
        win = true;
    }

    if (cellValues[3] == cellValues[4] && cellValues[3] == cellValues[5] && cellValues[3] != "") {
        win = true;
    }

    if (cellValues[6] == cellValues[7] && cellValues[6] == cellValues[8] && cellValues[6] != "") {
        win = true;
    }
    if (cellValues[0] == cellValues[3] && cellValues[0] == cellValues[6] && cellValues[0] != "") {
        win = true;
    }
    if (cellValues[1] == cellValues[4] && cellValues[1] == cellValues[7] && cellValues[1] != "") {
        win = true;
    }
    if (cellValues[2] == cellValues[5] && cellValues[2] == cellValues[8] && cellValues[2] != "") {
        win = true;
    }
    if (cellValues[0] == cellValues[4] && cellValues[0] == cellValues[8] && cellValues[0] != "") {
        win = true;
    }
    if (cellValues[2] == cellValues[4] && cellValues[2] == cellValues[6] && cellValues[2] != "") {

        win = true;
    }
    for (let i = 0; i < 9; i++) {
        console.log(cellValues[i])
        if (cellValues[i] != "") {

            if (i == 8) {
                draw = true;

            }
        }
        else {
            break;
        }
    }
    if (win == true) {
        alert(cellValue + " wins!");
    }
    else if (draw == true) {
        alert("DRAW!");
    }
    return draw == true ? draw : win;
}

export function ClearValues(cells) {
    for (let i = 0; i < 9; i++) {
        cells[i].innerText = "";
    }
}

export function initCellValues(cellValues, cells) {
    for (let i = 0; i < 9; i++) {
        cellValues[i] = "";
        cells[i].innerText = "";
    }
    return cellValues;
}
export function initCells(cells) {
    for (let i = 0; i < 9; i++) {
        cells[i].innerText = "";
    }
    return cells;
}
// if (typeof module === 'object') {
// module.exports = {initCellValues,CheckingLines,ClearValues}
// }

