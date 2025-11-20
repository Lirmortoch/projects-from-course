import { useState, useRef, useEffect } from "react";

import Project from "./components/Project";
import ProjectForm from "./components/ProjectForm";
import Sidebar from "./components/Sidebar";

import noProjectImage from './assets/no-projects.png'

function App() {
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState(['default', null]);

  function handleSetProjects(title, description, date) {
    const newProject = {
      id: projects.length + 1,
      title: title,
      description: description,
      date: date,
    }

    setProjects(prevProjects => prevProjects.concat(newProject));

    title, description, date = '';
  }
  function handleSetProject(state, projectIdx = null) {
    if (state === 'project') {
      setProject([state, projectIdx]);
    }
    else {
      setProject([state, projectIdx]);
    }
  }
  function handleDeleteProject(projectId) {
    setProjects(prevProjects => prevProjects.filter(proj => proj.id !== projectId));
    setProject(['default', null]);
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

  let renderElem;
  if (project[0] === 'default') {
    renderElem = noProjectSelectedElem;
  }
  else if (project[0] === 'create') {
    renderElem = <ProjectForm handleSetProjects={handleSetProjects} handleSetProject={handleSetProject} />;
  }
  else if (project[0] === 'project') {
    renderElem = <Project project={projects[project[1]]} handleDeleteProject={handleDeleteProject} />;
  }

  return (
    <main className="h-screen mt-8 flex gap-8">
      <Sidebar projects={projects} handleSetProject={handleSetProject} />
      
      { renderElem }
    </main>
  );
}

export default App;
