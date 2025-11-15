export default function Sidebar({ projects, handleSetProject }) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <p className="uppercase font-bold text-xl mb-4">Your projects</p>
            <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">+ Add Project</button>
            <menu className="flex items-center justify-end gap-4 my-4">
                {projects.length > 0 &&
                    projects.map((item, idx) => {
                        return (
                            <button className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800" key={item.id} onClick={() => handleSetProject('project', idx)}>
                                {item.title}
                            </button>
                        );
                    })}
            </menu>
        </aside>
    );
}
