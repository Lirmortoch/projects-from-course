import Player from "./components/Player";


function App() {
  

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName='Joe' symbol='X'/>
          <Player initialName='Bob' symbol='O'/>
        </ol>


      </div>
    </main>
  )
}

export default App
