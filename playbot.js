import { CheckingLines } from './test.js';
import { initCellValues } from './test.js';
import { initCells } from './test.js';
import { ClearValues } from './test.js';
// const { initCellValues, CheckingLines, ClearValues } = require('./test.js');
var cells = document.getElementsByClassName("cell");
let cellValue = "X";
var cellValues = [];
cellValues = initCellValues(cellValues, cells);
cells = initCells(cells);

for (let i = 0; i < cells.length; i++) {

    cells[i].addEventListener('click', function () {

        if (CheckingLines(cellValues, cellValue) === true) {
            ClearValues(cells);
            cellValues = initCellValues(cellValues, cells);
            // cells = initCells(cells);
            return;
        }



        console.log(i + " innertext " + cells[i].innerText)
        if (cells[i].innerText == "") {
            cells[i].innerText = "X";
            console.log("it " + cells[i].innerText)
            //alert("fff")
        }
        else{
            return;
        }
        if (cellValues[i] == "") {
            cellValues[i] = "X";
            console.log(cellValues)
            cellValue = "X"
        }
        else{
            return;
        }
        if (CheckingLines(cellValues, cellValue) === true) {
            ClearValues(cells);
            cellValues = initCellValues(cellValues, cells);
            // cells = initCells(cells);
            return;
        }
        else {
            let val = setValueBot(cellValue, cells, cellValues);
            if (val === false) {
                ClearValues(cells);
                cellValues = initCellValues(cellValues, cells);
                // cells = initCells(cells);
                return;
            }
            else {
                //alert("0")
                cellValues[val] = "0";
                cellValue = "0";
                if (CheckingLines(cellValues, cellValue) === true) {
                    ClearValues(cells);
                    cellValues = initCellValues(cellValues, cells);
                    // cells = initCells(cells);
                    return;
                }
            }
        }
    })
};


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function setValueBot(cellValue, cells, cellValues) {
    //console.log("set value func " + cellValue);
    //alert("WWW1")
    if (CheckingLines(cellValues, cellValue) === true) {
        alert("WWW")
        return false;
    }
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].innerText != "") {

            if (i == cells.length - 1) {
                alert("DRAW!n");
                return false;
            }
        }
        else {
            break;
        }
    }

    let rand = getRandomInt(9);
    if (cells[rand].innerText === "") {
        cells[rand].innerText = "0";
        cellValues[rand] = "0";
        //CheckingLines(cellValues,cellValue);
        return rand;
    }
    else
        setValueBot(cellValue, cells, cellValues)

}