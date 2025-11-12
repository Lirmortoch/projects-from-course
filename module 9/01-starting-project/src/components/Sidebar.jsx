export default function Sidebar({ projects, handleSetProject }) {
    return (
        <nav>
            {projects.length > 0 &&
                projects.map((item, idx) => {
                    return (
                        <button key={item.id} onClick={() => handleSetProject('project', idx)}>
                            {item.title}
                        </button>
                    );
                })}
        </nav>
    );
}
