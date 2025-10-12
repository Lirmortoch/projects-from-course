import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');


  function handleSelectionSquare(rowIndex, colIndex) {
    setActivePlayer((currentActivePlayer) => currentActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns(prevTurns => {
      let currentPlayer = "X";
      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

      const updatedTurns = [
        { square: {row: rowIndex, col: colIndex}, player: currentPlayer }, 
        ...prevTurns
      ];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName='Joe' symbol='X' isActive={activePlayer === 'X'} />
          <Player initialName='Bob' symbol='O' isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard onSelectSquare={handleSelectionSquare} activePlayerSymbol={activePlayer} />
        
        <Log />
      </div>
    </main>
  )
}

export default App
