import { useRef, useState } from 'react';
import '../Tic-Tac-Toe/TicTacToe.css';
import O_icon from '../assets/O.png';
import X_icon from '../assets/X.png';

//get array of X or O
let data = ['', '', '', '', '', '', '', '', ''];
let X_css = "background-color:#747bff; padding:30px; border-radius:8px;";
let O_css = "background-color:#dff8ff; padding:30px; border-radius:8px;";
let x_css = "background-color:#747bff; padding:10px; border-radius:8px;";
let o_css = "background-color:#dff8ff; padding:10px; border-radius:8px;";

export default function TicTacToe() {
    let [count, setCount] = useState(0);
    let [xWins, setXWins] = useState(0);
    let [oWins, setOWins] = useState(0);
    let [draw, setDraws] = useState(0);
    let [lock, setLock] = useState(false);
    let titleRef = useRef(null);
    let roundRef = useRef(null);
    let box0 = useRef(null);
    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);
    let box_array = [box0, box1, box2, box3, box4, box5, box6, box7, box8];

    const score = () => {
        roundRef.current.innerHTML = `X: ${xWins} | O: ${oWins} | Draws: ${draw}`;
    };

    const toggle = (e, num) => {
        if (data[num] == "x" || data[num] == "o") {
            return;
        }

        if (lock) return;

        // Player move
        if (count % 2 === 0) {
            e.target.innerHTML = `<img style='${X_css}' src='${X_icon}'>`;
            data[num] = "x";
            setCount(count + 1);
        }
        checkWin();

        if (!lock) {
            // AI (Minimax) move
            const bestMove = getBestMove();
            if (bestMove !== -1) {
                data[bestMove] = "o";
                box_array[bestMove].current.innerHTML = `<img style='${O_css}' src='${O_icon}'>`;
                setCount(count + 2);
            }
            checkWin();
        }
    };

    const checkWin = () => {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let combo of winningCombinations) {
            const [a, b, c] = combo;
            if (data[a] && data[a] === data[b] && data[a] === data[c]) {
                won(data[a]);
                return;
            }
        }

        if (data.every((element) => element !== "")) {
            titleRef.current.innerHTML = "Draw!";
            setDraws(draw + 1);
            setLock(true);
            score();
        }
    };

    const won = (winner) => {
        setLock(true);
        if (winner === "x") {
            titleRef.current.innerHTML = `Congrats! <img style='${x_css}' src=${X_icon}>`;
            setXWins(xWins + 1);
        } else if (winner === "o") {
            titleRef.current.innerHTML = `Congrats! <img style='${o_css}'src=${O_icon}>`;
            setOWins(oWins + 1);
        }
        score();
    };

    const reset = () => {
        setLock(false);
        data = ['', '', '', '', '', '', '', '', ''];
        titleRef.current.innerHTML = '<span> AI React</span> Tic Tac Toe';
        box_array.map((e) => {
            e.current.innerHTML = '';
        });
        setCount(0);
    };

    // Minimax Algorithm
    const minimax = (newData, depth, isMaximizing) => {
        let scores = {
            x: -10,
            o: 10,
            tie: 0
        };

        let result = checkForWinner(newData);
        if (result !== null) {
            return scores[result];
        }

        if (isMaximizing) {
            let bestScore = -Infinity;
            for (let i = 0; i < newData.length; i++) {
                if (newData[i] === '') {
                    newData[i] = 'o';
                    let score = minimax(newData, depth + 1, false);
                    newData[i] = '';
                    bestScore = Math.max(score, bestScore);
                }
            }
            return bestScore;
        } else {
            let bestScore = Infinity;
            for (let i = 0; i < newData.length; i++) {
                if (newData[i] === '') {
                    newData[i] = 'x';
                    let score = minimax(newData, depth + 1, true);
                    newData[i] = '';
                    bestScore = Math.min(score, bestScore);
                }
            }
            return bestScore;
        }
    };

    const getBestMove = () => {
        let bestScore = -Infinity;
        let move = -1;
        for (let i = 0; i < data.length; i++) {
            if (data[i] === '') {
                data[i] = 'o';
                let score = minimax(data, 0, false);
                data[i] = '';
                if (score > bestScore) {
                    bestScore = score;
                    move = i;
                }
            }
        }
        return move;
    };

    const checkForWinner = (board) => {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let combo of winningCombinations) {
            const [a, b, c] = combo;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }

        if (board.every((element) => element !== '')) {
            return 'tie';
        }

        return null;
    };

    return (
        <div className="container">
            <h1 className="title" ref={titleRef}><span>AI React</span> Tic Tac Toe</h1>
            <h1 className="title" ref={roundRef}></h1>
            <div className="board">
                <div className="row1">
                    <div className="boxes" ref={box0} onClick={(e) => { toggle(e, 0) }}></div>
                    <div className="boxes" ref={box1} onClick={(e) => { toggle(e, 1) }}></div>
                    <div className="boxes" ref={box2} onClick={(e) => { toggle(e, 2) }}></div>
                </div>
                <div className="row2">
                    <div className="boxes" ref={box3} onClick={(e) => { toggle(e, 3) }}></div>
                    <div className="boxes" ref={box4} onClick={(e) => { toggle(e, 4) }}></div>
                    <div className="boxes" ref={box5} onClick={(e) => { toggle(e, 5) }}></div>
                </div>
                <div className="row3">
                    <div className="boxes" ref={box6} onClick={(e) => { toggle(e, 6) }}></div>
                    <div className="boxes" ref={box7} onClick={(e) => { toggle(e, 7) }}></div>
                    <div className="boxes" ref={box8} onClick={(e) => { toggle(e, 8) }}></div>
                </div>
            </div>
            <button className="reset" onClick={() => { reset() }}>Reset</button>
        </div>
    );
}
