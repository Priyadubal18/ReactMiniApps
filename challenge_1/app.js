var isX = false;
var gameOver = false;
var trelemnts = document.getElementsByClassName('row');
for (var i = 0; i < trelemnts.length; i++) {
    trelemnts[i].addEventListener('click', addXFunction);
}

function resetGame() {
    for (var i = 0; i < trelemnts.length; i++) {
        trelemnts[i].innerHTML = '';
    }
    var text = document.getElementById('message');
    text.innerHTML = '';
    gameOver = false;
}

// console.log(.append('<tr>1</tr>'))
function addXFunction() {
    if (!gameOver) {
        if (this.innerHTML === '') {
            if (!isX) {
                this.innerHTML = 'X';
                checkPattern(this, 'X');
                isX = !isX;
            } else {
                this.innerHTML = 'O'
                checkPattern(this, 'O');
                isX = !isX;
            }
        }
    }
}
function checkPattern(data, value) {
    let currentid = data.id;
    var text = document.getElementById('message');
    if (checkRowPatter(currentid.split('_')[0], value) || checkColPattern(currentid.split('_')[1], value) || checkDiagonal(currentid, value)) {
        text.innerHTML = `The winner is ${value}`;
        gameOver = true;
    } else if (checkDrawGame()) {
        text.innerHTML = `The game is draw`;
        gameOver = true;
    }
}

function checkDrawGame() {
    debugger;
    for (var i = 0; i < trelemnts.length; i++) {
        if (trelemnts[i].innerHTML === '') {
            return false;
        }
    }
    return true;
}


function checkRowPatter(row, value) {
    debugger;
    //let rowelemnts = document.getElementsByClassName('row');
    let rowtrelements = [];
    for (var i = 0; i < trelemnts.length; i++) {
        if (trelemnts[i].id.startsWith(row)) {
            rowtrelements.push(trelemnts[i]);
        }
    }
    return rowtrelements.every(function (rowtr) {
        console.log(rowtrelements[0].innerHTML)
        return rowtr.innerHTML === value;
    });
}

function checkColPattern(col, value) {
    debugger;
    //let colelemnts = document.getElementsByClassName('row');

    console.log(trelemnts);
    let coltrelements = [];
    for (var i = 0; i < trelemnts.length; i++) {
        if (trelemnts[i].id.endsWith(col)) {
            coltrelements.push(trelemnts[i]);
        }
    }
    return coltrelements.every(function (rowtr) {
        console.log(coltrelements[0].innerHTML)
        return rowtr.innerHTML === value;
    });
}

function checkDiagonal(row_col, value) {
    debugger;
    let diagonalArray = ['1_1', '2_2', '3_3', '1_3', '3_1'];
    let rightdiagonalArray = ['1_3', '2_2', '3_1'];
    let leftdiagonalArray = ['1_1', '2_2', '3_3'];
    let diagonaltrelements = [];
    if (diagonalArray.includes(row_col) && rightdiagonalArray.includes(row_col)) {
        for (var i = 0; i < trelemnts.length; i++) {
            if (rightdiagonalArray.includes(trelemnts[i].id)) {
                diagonaltrelements.push(trelemnts[i])
            }
        }
        let isrightDiagonal = diagonaltrelements.every(function (rowtr) {
            console.log(rowtr.innerHTML);
            return rowtr.innerHTML === value;
        });
        if (isrightDiagonal) {
            return true;
        } else {
            diagonaltrelements = [];
        }
    }
    if (diagonalArray.includes(row_col) && leftdiagonalArray.includes(row_col)) {
        for (var i = 0; i < trelemnts.length; i++) {
            if (leftdiagonalArray.includes(trelemnts[i].id)) {
                diagonaltrelements.push(trelemnts[i])
            }
        }
        let isleftDiagonal = diagonaltrelements.every(function (rowtr) {
            console.log(rowtr.innerHTML);
            return rowtr.innerHTML === value;
        });
        if (isleftDiagonal) {
            return true;
        }

    }
    return false;

}

