import { useState, useRef } from "react";

import Project from "./components/Project";
import ProjectForm from "./components/ProjectForm";
import Sidebar from "./components/Sidebar";

import noProjectImage from './assets/no-projects.png'

function App() {
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState('default');
  
  function handleSetProjects(title, description, date) {
    const project = {
      id: projects.length + 1,
      title: title,
      description: description,
      date: date,
    }

    setProjects(prevProjects => prevProjects.concat(project));
  }
  function handleSetProject(state, projectIdx = null) {
    if (state === 'create') {
      setProject('create');
    }
    else if (state === 'project') {
      setProject(projectIdx);
    }
  }

  const noProjectSelectedElem = (
    <section>
      <div>
        <img src={noProjectImage} alt="No project image" />
      </div>

      <h2>No Project Selected</h2>

      <p>Select a project or get started with a new one</p>

      <button onClick={() => handleSetProject('create')}>Create new project</button>
    </section>
  );

  return (
    <>
      <Sidebar projects={projects} />
      
      <main>
        {project === 'default' && noProjectSelectedElem}
        {project === 'create' && <ProjectForm handleSetProjects={handleSetProjects} />}
        {project === 'project' && <Project project={projects[project]} />}
      </main>
    </>
  );
}

export default App;
