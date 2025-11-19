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
            <div>
                <div>
                    <h2>{project.title}</h2>
                    <button onClick={(e) => handleDeleteProject(project.id)}>Delete</button>
                </div>

                <p>{project.date}</p>

                <p>{project.description}</p>
            </div>

            <hr />
            
            {/* Task's section */}
            <div>
                <h3>Tasks</h3>

                <form className="" onSubmit={e => e.preventDefault()}>
                    {/* <label htmlFor="project-task">Add task</label> */}
                    <input type="text" id="project-task" placeholder="Enter task" ref={inputTaskRef} />
                    <button type="submit" onClick={(e) => handleSetTasks(inputTaskRef.current.value)} >Add Task</button>
                </form>

                <ul>
                    {tasks.map(task => {
                        return <li key={task.id}>
                            <span>{task.title}</span>
                            <button onClick={(e) => handleDeleteTask(task.id)}>Clear</button>
                        </li>                     
                    })}
                </ul>
            </div>
        </section>
    );
}