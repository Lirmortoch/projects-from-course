export default function Sidebar({ projects }) {
    return (
        <nav>
            {projects.map(item => {
                return <button>{item.title}</button>
            })}
        </nav>
    );
}