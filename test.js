const cells = document.getElementsByClassName("cell");
let cellValue = "X";
for (let i = 0 ; i < cells.length; i++) {
    
    cells[i].addEventListener('click', function (e) {
        cells[i].innerText = cellValue;
        cellValue = cellValue ==="X"?"0":"X";
})};

