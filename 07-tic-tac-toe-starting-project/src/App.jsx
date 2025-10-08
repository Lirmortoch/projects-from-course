import Player from "./components/Player";


function App() {
  

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name='Joe' symbol='X'/>
          <Player name='Bob' symbol='O'/>
        </ol>


      </div>
    </main>
  )
}

export default App
