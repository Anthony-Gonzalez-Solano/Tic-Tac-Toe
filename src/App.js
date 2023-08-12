import './App.css';
import Board  from './components/Board';
import { useState } from 'react';
import GoodButton from './components/Button';

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [visible, setVisible] = useState(false);
  const [currentMove, setCurrentMove] = useState(0);
  const [checked,setChecked] = useState(0);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;
  
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setChecked(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setChecked(nextMove);
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Ir al °' + move + ' movimiento';
    } else {
      description = 'Ir al inicio del juego';
    }
    return (
      <li key={move}>
        <input type='radio' name="radio" id={move} onClick={() => jumpTo(move)} checked={move === checked}/>
        <label for={move}>{description}</label>
      </li>
    );
  });

  function changeVisible(){
    setVisible(!visible)
  }

  return (
    <div className='content'>
      <div className='card'>
        <div className="game">
          <h1>Tic Tac Toe</h1>
          <div className="game-board">
            <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
          </div>
          <GoodButton className='button' value={visible ? "Esconder Historial":"Ver Historial"} onClickAction={changeVisible} ></GoodButton>
          <div className={"game-info" + (visible?' game-info-extended':"")}>
            <ul>{moves}</ul>
          </div>
        </div>
      </div>
    </div>
  );

}
export default Game;
