import { useState, useRef } from "react";

export default function Project({ project, handleDeleteProject }) {
    const [tasks, setTasks] = useState([]);
    const inputTaskRef = useRef();

    function handleSetTasks(title) {
        const newTask = {
            id: tasks.length + 1,
            title: title,
        }

        setTasks(prevTasks => prevTasks.concat(newTask));

        title = '';
    }
    function handleDeleteTask(taskId) {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
    }

    return (
        <section className="w-[35rem] mt-16">
            {/* Project's header */}
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-3xl font-bold text-stone-700">{project.title}</h2>
                    <button onClick={(e) => handleDeleteProject(project.id)} className="text-stone-850 hover:text-red-700">Delete</button>
                </div>

                <p className="text-stone-400 mb-4">{project.date}</p>

                <p className="text-stone-900 whitespace-pre-wrap">{project.description}</p>
            </header>
            
            {/* Task's section */}
            <div>
                <h3 className="text-2xl font-bold text-stone-700 my-4">Tasks</h3>

                <form className="flex items-center gap-4" onSubmit={e => e.preventDefault()}>
                    {/* <label htmlFor="project-task">Add task</label> */}
                    <input type="text" id="project-task" placeholder="Enter task" ref={inputTaskRef} className="w-64 px-2 py-1 rounded-sm bg-stone-200" />

                    <button type="submit" onClick={(e) => handleSetTasks(inputTaskRef.current.value)} className="text-stone-800 hover:text-stone-950" >Add Task</button>
                </form>

                <ul className="p-4 mt-8 rounded-md bg-stone-100">
                    {tasks.map(task => {
                        return <li key={task.id} className="flex justify-between my-4">
                            <span>{task.title}</span>
                            <button onClick={(e) => handleDeleteTask(task.id)}>Clear</button>
                        </li>                     
                    })}
                </ul>
            </div>
        </section>
    );
}