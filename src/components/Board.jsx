import "./Board.css"
import Square from "./Square"

export default function Board(props/*{xIsNext, squares, onPlay}*/) {
    let winners;

    const winner = calculateWinner(props.squares);
    let status;
    let win;
    

    if (winner) {
      if(winner === 'Empate'){
        status = "No hay Ganador";
      }else{
        status = "El Ganador es: " + winner;
      }
      win = 'win';
    } else {
      status = "Turno de " + (props.xIsNext ? "las X" : " los O");
      win = null;
    }
  
    
    function handleClick(i) {
        if (props.squares[i] || calculateWinner(props.squares)) {
          return;
        }
        const nextSquares = props.squares.slice();
        if (props.xIsNext) {
          nextSquares[i] = "X";
        } else {
          nextSquares[i] = "O";
        }
        props.onPlay(nextSquares);
      }
    
      function calculateWinner(squares) {
        const lines = [
          [0, 1, 2,'up-row'],
          [3, 4, 5,'middle-row'],
          [6, 7, 8,'bottom-row'],
          [0, 3, 6,'left-column'],
          [1, 4, 7,'middle-column'],
          [2, 5, 8,'rigth-column'],
          [0, 4, 8,'down-diagonally'],
          [2, 4, 6,'up-diagonally']
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c, d] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                winners = d;
                return squares[a];
            }
        }
        let count = 0;
        for (let i = 0; i < squares.length; i++){
            if (squares[i]){
                count++
            }
            if(count === 9){
              winners = 'Empate';
              return 'Empate'
            }
        }
        winners = '';
        return null;
      }
  
      return (
        <div className="board-content">
          <div className={"status "+win} >{status}</div>
          <div className="board-row">
            <Square value={props.squares[0]} onSquareClick={() => handleClick(0)} sing={props.xIsNext} win={winners} id='0'/>
            <Square value={props.squares[1]} onSquareClick={() => handleClick(1)} sing={props.xIsNext} win={winners} id='1'/>
            <Square value={props.squares[2]} onSquareClick={() => handleClick(2)} sing={props.xIsNext} win={winners} id='2'/>
          </div>
          <div className="board-row">
            <Square value={props.squares[3]} onSquareClick={() => handleClick(3)} sing={props.xIsNext} win={winners} id='3'/>
            <Square value={props.squares[4]} onSquareClick={() => handleClick(4)} sing={props.xIsNext} win={winners} id='4'/>
            <Square value={props.squares[5]} onSquareClick={() => handleClick(5)} sing={props.xIsNext} win={winners} id='5'/>
          </div>
          <div className="board-row">
            <Square value={props.squares[6]} onSquareClick={() => handleClick(6)} sing={props.xIsNext} win={winners} id='6'/>
            <Square value={props.squares[7]} onSquareClick={() => handleClick(7)} sing={props.xIsNext} win={winners} id='7'/>
            <Square value={props.squares[8]} onSquareClick={() => handleClick(8)} sing={props.xIsNext} win={winners} id='8'/>
          </div>
          <div className={"winer-line "+winners}></div>
        </div>
      );
  }