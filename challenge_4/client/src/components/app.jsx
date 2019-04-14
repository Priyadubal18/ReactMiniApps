import React from "react";
import Row from './Row.jsx';

const myDivStyle = {

    border: '3px solid black',
    width: '350px',
    height: '300px'
}
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player1: 1,
            player2: 2,
            currentplayer: 1,
            board: [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0]],
            gameOver: false,
            message: ''
        }
        this.playgame = this.playgame.bind(this);
    }
    togglePlayer() {
        debugger;
        return (this.state.currentplayer === this.state.player1) ? this.state.player2 : this.state.player1;
    }
    playgame(col) {
        debugger;
        if (!this.state.gameOver) {
            let newboard = this.state.board;
            for (let row = 5; row >= 0; row--) {
                if (!newboard[row][col]) {
                    debugger;
                    newboard[row][col] = this.state.currentplayer;
                    break;
                }
            }// end for

            let gameresult = this.checkGameBoard(newboard);
            if (gameresult === this.state.player1) {
                this.setState({
                    board: newboard,
                    gameOver: true,
                    message: 'Player 1  wins!'
                });
            } else if (gameresult === this.state.player2) {
                this.setState({
                    board: newboard,
                    gameOver: true,
                    message: 'Player 2  wins!'
                });
            } else if (gameresult === 'draw') {
                this.setState({
                    board: newboard,
                    gameOver: true,
                    message: 'Draw game.'
                });
            } else {
                this.setState({
                    board: newboard,
                    currentplayer: this.togglePlayer()
                });
            }
        }
        else {
            this.setState({ message: 'Game over. Please refresh to start a  new game.' });
        }
        console.log(col);
    }


    checkVertical(board) {
        // Check only if row is 3 or greater
        for (let r = 3; r < 6; r++) {
            for (let c = 0; c < 7; c++) {
                if (board[r][c]) {
                    if (board[r][c] === board[r - 1][c] &&
                        board[r][c] === board[r - 2][c] &&
                        board[r][c] === board[r - 3][c]) {
                        return board[r][c];
                    }
                }
            }
        }
    }

    checkHorizontal(board) {
        // Check only if column is 3 or less
        for (let r = 0; r < 6; r++) {
            for (let c = 0; c < 4; c++) {
                if (board[r][c]) {
                    if (board[r][c] === board[r][c + 1] &&
                        board[r][c] === board[r][c + 2] &&
                        board[r][c] === board[r][c + 3]) {
                        return board[r][c];
                    }
                }
            }
        }
    }

    checkDiagonalRight(board) {
        // Check only if row is 3 or greater AND column is 3 or less
        for (let r = 3; r < 6; r++) {
            for (let c = 0; c < 4; c++) {
                if (board[r][c]) {
                    if (board[r][c] === board[r - 1][c + 1] &&
                        board[r][c] === board[r - 2][c + 2] &&
                        board[r][c] === board[r - 3][c + 3]) {
                        return board[r][c];
                    }
                }
            }
        }
    }

    checkDiagonalLeft(board) {
        // Check only if row is 3 or greater AND column is 3 or greater
        for (let r = 3; r < 6; r++) {
            for (let c = 3; c < 7; c++) {
                if (board[r][c]) {
                    if (board[r][c] === board[r - 1][c - 1] &&
                        board[r][c] === board[r - 2][c - 2] &&
                        board[r][c] === board[r - 3][c - 3]) {
                        return board[r][c];
                    }
                }
            }
        }
    }

    checkDraw(board) {
        debugger;
        for (let r = 0; r < 6; r++) {
            for (let c = 0; c < 7; c++) {
                if (board[r][c] === 0) {
                    return 0;
                }
            }
        }
        return 'draw';
    }

    checkGameBoard(board) {
        return this.checkVertical(board) || this.checkDiagonalRight(board) || this.checkDiagonalLeft(board) || this.checkHorizontal(board) || this.checkDraw(board);
    }


    render() {
        return (
            <div>
                <table style={myDivStyle}>
                    <thead>
                    </thead>
                    <tbody>
                        {this.state.board.map((row, i) => (<Row key={i} row={row} playgame={this.playgame} />))}
                    </tbody>
                </table>
                <h3>{this.state.message}</h3>
            </div>
        )
    }
}

export default App;