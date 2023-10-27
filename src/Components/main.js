import React, { useState } from "react";

function Square({ value, onSquareClick }) {

    return <button className="square" onClick={onSquareClick}>{value}</button>;
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]

        if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
            return squares[a];
        }
    }
    return null
}

function Board() {

    const [squares, setSqaures] = useState(Array(9).fill(null));
    const [xIsnext, setxIsnext] = useState(true)

    const winner = calculateWinner(squares);
    let status;
    let np;

    if (xIsnext) {
        np = "X"
    } else {
        np = "O"
    }

    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next Player: " + np;
    }

    function handleclick(i) {

        if (squares[i] || calculateWinner(squares)) {
            return;
        }

        const nextSquares = squares.slice();

        if (xIsnext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        setSqaures(nextSquares)
        setxIsnext(!xIsnext)
    }

    function resetbtn(){
        window.location.reload()
    }

    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleclick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleclick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleclick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleclick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleclick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleclick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleclick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleclick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleclick(8)} />
            </div>

            <div>
                <button type="reset" onClick={resetbtn}>RESET</button>
            </div>
        </>
    );
}

export default Board;