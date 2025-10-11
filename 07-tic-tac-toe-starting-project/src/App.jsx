import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectionSquare() {
    setActivePlayer((currentActivePlayer) => currentActivePlayer === 'X' ? 'O' : 'X');
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName='Joe' symbol='X' isActive={activePlayer === 'X'} />
          <Player initialName='Bob' symbol='O' isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard onSelectSquare={handleSelectionSquare} activePlayerSymbol={activePlayer} />

      </div>
    </main>
  )
}

export default App
