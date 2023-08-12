import "./Square.css"

export default function Square(props) {
    function notWinnerSquare(){
        if(props.win === 'Empate'){
            return true
        }
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
            if (d === props.win) {
                if(a+'' !== props.id && b+'' !== props.id && c+'' !== props.id){
                    return true;
                }else{
                    return false
                }
            }
        }
    } 

    return (
        <div className="squareDiv">
            <button className='square' onClick={props.onSquareClick}>
                <label className={"value"+ (notWinnerSquare() ? ' low':'')}>{props.value}</label>
                {!props.value && !props.win && <label className="sing">{props.sing ? 'X':'O'}</label>}
            </button>
        </div>
    );
}
