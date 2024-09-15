import { useRef, useState } from 'react';
import './TicTacToe.css';
import O_icon from '../assets/O.png';
import X_icon from '../assets/X.png';

//get array of X or O
let data = ['','','','','','','','',''];
let X_css = "background-color:#00c8ff; padding:30px; border-radius:8px;";
let O_css = "background-color:#dff8ff; padding:30px; border-radius:8px;";
let x_css = "background-color:#00c8ff; padding:10px; border-radius:8px;";
let o_css = "background-color:#dff8ff; padding:10px; border-radius:8px;";


export default function TicTacToe(){

    let [move, setMove] = useState(0);
    let [count, setCount] = useState(0);
    let [xWins, setXWins] = useState(0);
    let [oWins, setOWins] = useState(0);
    let [draw, setDraws] = useState(0);
    let [lock, setLock] = useState(false);
    let titleRef = useRef(null);
    let roundRef = useRef(null);
    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);
    let box9 = useRef(null);
    let box_array = [box1,box2,box3,box4,box5,box6,box7,box8,box9];

    const toggle = (e,num) => {
        if(data[num]=="x"||data[num]=="o"){
            data[num]=data[num];
        }else{
            if(lock){
                return 0;
            }else if(count%2===0){
                titleRef.current.innerHTML = `Round <span>${count}</span>: <img style='${o_css}' src='${O_icon}'>`;
                e.target.innerHTML = `<img style='${X_css}' src='${X_icon}'>`;
                data[num]="x";
                setCount(++count);
                setMove(move=num);
            }else{
                titleRef.current.innerHTML = `Round <span>${count}</span>: <img style='${x_css}' src='${X_icon}'>`;
                e.target.innerHTML = `<img style='${O_css}' src='${O_icon}'>`;
                data[num]="o";
                setCount(++count);
            }
            checkWin();
        }
    }

    //win checker
    const checkWin = () => {
        if(data[0]===data[1] && data[1]===data[2] && data[2]!==""){
            won(data[2]);
        }else if(data[3]===data[4] && data[4]===data[5] && data[5]!==""){
            won(data[5]);
        }else if(data[6]===data[7] && data[7]===data[8] && data[8]!==""){
            won(data[8]);
        }else if(data[0]===data[3] && data[3]===data[6] && data[6]!==""){
            won(data[6]);
        }else if(data[1]===data[4] && data[4]===data[7] && data[7]!==""){
            won(data[7]);
        }else if(data[2]===data[5] && data[5]===data[8] && data[8]!==""){
            won(data[8]);
        }else if(data[0]===data[4] && data[4]===data[8] && data[8]!==""){
            won(data[8]);
        }else if(data[2]===data[4] && data[4]===data[6] && data[6]!==""){
            won(data[6]);
        }else if(data.every(element=>element!==null)){
            let locdat = data.filter(Boolean).length;
            if(locdat===9){
                titleRef.current.innerHTML = `Draw!`;
                setDraws(++draw);
            }
        }
    }

    const won = (winner) => {
        setLock(true);
        if(winner==="x"){
            titleRef.current.innerHTML = `Congrats! <img style='${x_css}' src=${X_icon}>`;
            setXWins(++xWins);

        }else if(winner==="o"){
            titleRef.current.innerHTML = `Congrats! <img style='${o_css}'src=${O_icon}>`;
            setOWins(++oWins);
        }
        
    }

    const resetBoard = () => {
        setLock(false);
        data = ['','','','','','','','',''];
        titleRef.current.innerHTML = '<span>Player</span> vs <span>Player</span>';
        box_array.map((e)=>{
            e.current.innerHTML = ''
        })
        setCount(0);
    }

    const resetScore = () =>{
        setDraws(0);
        setXWins(0);
        setOWins(0);
    }

    return (
        <div className="container">
            <h1 className="title" ref={titleRef}><span>Player</span> vs <span>Player</span></h1>
            <h1 className="title" ref={roundRef}>
                <table className='score'>
                    <tr className='score_top'>
                        <th>X</th>
                        <th>O</th>
                        <th>Draws</th>
                    </tr>
                    <tr className='score_bottom'>
                        <td>{xWins}</td>
                        <td>{oWins}</td>
                        <td>{draw}</td>
                    </tr>
                </table>
            </h1>
            <div className="board">
                <div className="row1">
                    <div className="boxes" ref={box1} onClick={(e)=>{toggle(e,0)}}></div>
                    <div className="boxes" ref={box2} onClick={(e)=>{toggle(e,1)}}></div>
                    <div className="boxes" ref={box3} onClick={(e)=>{toggle(e,2)}}></div>
                </div>
                <div className="row2">
                    <div className="boxes" ref={box4} onClick={(e)=>{toggle(e,3)}}></div>
                    <div className="boxes" ref={box5} onClick={(e)=>{toggle(e,4)}}></div>
                    <div className="boxes" ref={box6} onClick={(e)=>{toggle(e,5)}}></div>
                </div>
                <div className="row3">
                    <div className="boxes" ref={box7} onClick={(e)=>{toggle(e,6)}}></div>
                    <div className="boxes" ref={box8} onClick={(e)=>{toggle(e,7)}}></div>
                    <div className="boxes" ref={box9} onClick={(e)=>{toggle(e,8)}}></div>
                </div>
            </div>
            <div className='container-reset'>
                <button className="reset" onClick={()=>{resetBoard()}}>Reset Board</button>
                <button className="reset" onClick={()=>{resetScore()}}>Reset Score</button>
            </div>
        </div>
    );
}