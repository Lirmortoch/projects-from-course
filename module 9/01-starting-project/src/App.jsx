import { useState, useRef } from "react";

import Project from "./components/Project";
import ProjectForm from "./components/ProjectForm";
import Sidebar from "./components/Sidebar";

import noProjectImage from './assets/no-projects.png'

function App() {
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState('create');
  
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
    <section className="w-[35rem] mt-16 mt-24 text-center w-2/3">
      <div className="w-16 h-16 object-contain mx-auto">
        <img src={noProjectImage} alt="No project image" />
      </div>

      <h2 className="text-xl font-bold text-stone-700 my-4">No Project Selected</h2>

      <p className="text-stone-600 mb-8">Select a project or get started with a new one</p>

      <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-800 text-stone-400 hover:bg-stone-700 hover:text-stone-100" onClick={() => handleSetProject('create')}>Create new project</button>
    </section>
  );

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar projects={projects} handleSetProject={handleSetProject} />
      
      {project === 'default' && noProjectSelectedElem}
      {project === 'create' && <ProjectForm handleSetProjects={handleSetProjects} />}
      {project === 'project' && <Project project={projects[project]} />}
    </main>
  );
}

export default App;
