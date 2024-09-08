import './App.css';
import TicTacToe from './Tic-Tac-Toe/TicTacToe';
import AITicTacToe from './AI-Tic-Tac-Toe/TicTacToe-AI';

export default function App(){
  return (
    <>
      <AITicTacToe/>
      <TicTacToe/>
    </>
  );
}
