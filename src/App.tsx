import './App.css';
import Home from './Home/Home';
import TicTacToe from './Tic-Tac-Toe/TicTacToe';
import AITicTacToe from './AI-Tic-Tac-Toe/TicTacToe-AI';
import Navbar from './Components/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";

export default function App(){
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='AI-Tic-Tac-Toe' element={<AITicTacToe/>}/>
          <Route path='Tic-Tac-Toe' element={<TicTacToe/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
