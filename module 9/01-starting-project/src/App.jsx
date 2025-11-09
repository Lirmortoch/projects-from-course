import { useState, useRef } from "react";
import Project from "./components/Project";
import Sidebar from "./components/Sidebar";
import noProjectImage from './assets/no-projects.png'

function App() {
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState(null);
  
  function handleSetProjects(title, description, date) {
    const project = {
      title: title,
      description: description,
      date: date,
    }

    setProjects(prevProjects => prevProjects.concat(project));
  }

  const noProjectSelectedElem = (
    <section>
      <div>
        <img src={noProjectImage} alt="No project image" />
      </div>

      <h2>No Project Selected</h2>

      <p>Select a project or get started with a new one</p>

      <button onClick={handleSetProjects}>Create new project</button>
    </section>
  );

  return (
    <>
      <Sidebar />
      
      <main>
      
      </main>
    </>
  );
}

export default App;
