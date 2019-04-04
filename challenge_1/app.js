
var text = document.getElementById('message');
function initialize() {
    var trelemnts = document.getElementsByClassName('row');
    var init = new ticTacToe();
    for (var i = 0; i < trelemnts.length; i++) {
        trelemnts[i].innerHTML = '';
        trelemnts[i].addEventListener('click', init.placePlayer.bind(init, trelemnts[i]));
    }
}
function resetGame() {
    initialize();
    text.innerHTML = '';
}

var ticTacToe = function () {
    this.board = [[0, 0, 0,],
    [0, 0, 0,],
    [0, 0, 0,]
    ];
    this.currentPlayer = 'X';
    this.gameOver = false,
        this.isEmptyBoard = function (row, col) {
            return this.board[row][col] === 0
        };
    this.placePlayer = function (data) {
        debugger;
        let playerId = data.id.split('_');
        let row = playerId[0];
        let col = playerId[1];
        //Check if board is empty
        if (this.isEmptyBoard(row, col) && (!this.gameOver)) {
            this.board[row][col] = this.currentPlayer;
            this.updateDom(data, row, col);
            this.checkWinnerPattern(row, col, this.currentPlayer);
            this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
            // Check row pattern
        }
    };
    this.updateDom = function (data, row, col) {
        data.innerHTML = this.board[row][col];
        //data.innerText = this.board[row][col];
    };
    this.checkWinnerPattern = function (row, col, value) {
        if ((this.checkMajorDiagonalConfilct(value)) || (this.checkMinorDiagonalConfilct(value)) || (this.checkRowPattern(row, value)) || (this.checkColPattern(col, value))) {
            this.gameOver = true;
            text.innerHTML = `The winner is ${value}`;
        } else if (this.checkDraw()) {
            this.gameOver = true;
            text.innerHTML = `Its a Draw Game`;
        }

    };
    this.checkRowPattern = function (row, value) {
        return this.board[row].every(function (tr) {
            return tr === value;
        });
    };
    this.checkColPattern = function (col, value) {
        let colArray = [];
        for (var i = 0; i < this.board[0].length; i++) {
            colArray.push(this.board[i][col])
        }
        return colArray.every(function (tc) {
            return tc === value;
        })
    };
    this.checkMajorDiagonalConfilct = function (value) {
        debugger;
        var j = 0;
        let majorDiagonalArray = [];
        for (var i = 0; i < this.board[0].length; i++) {
            majorDiagonalArray.push(this.board[i][j]);
            j++;
        }
        return majorDiagonalArray.every(function (dr) {
            return dr === value;
        });
    };
    this.checkMinorDiagonalConfilct = function (value) {
        debugger
        var j = this.board[0].length - 1;
        let minorDiagonalArray = [];
        for (var i = 0; i < this.board[0].length; i++) {
            minorDiagonalArray.push(this.board[i][j]);
            j--;
        }
        return minorDiagonalArray.every(function (dr) {
            return dr === value;
        });
    };
    this.checkDraw = function () {
        for (var i = 0; i < this.board.length; i++) {
            for (j = 0; j < this.board.length; j++) {
                if (this.board[i][j] === 0) {
                    return false;
                }
            }
        }
        return true;
    };

}

initialize();

/*
With Dom Elements

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

*/