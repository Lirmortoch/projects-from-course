import { useRef } from "react";

export default function ProjectForm({ handleSetProjects }) {
    const refProjectTitle = useRef();
    const refProjectDescription = useRef();
    const refProjectDate = useRef();

    const fieldsetClassName = 'flex flex-col gap-1 my-4';
    const labelClassName = 'text-sm font-bold uppercase text-stone-600';
    const inputClassName = 'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-900 focus:outline-none focus:border-stone-600';

    return (
        <form className="w-[35rem] mt-16">
            <fieldset className={fieldsetClassName}>
                <label htmlFor="project-title" className={labelClassName}>Title</label>

                <input type="text" id="project-title" name="project-title" className={inputClassName} ref={refProjectTitle} />
            </fieldset>

            <fieldset className={fieldsetClassName}>
                <label htmlFor="project-description" className={labelClassName}>Description</label>

                <textarea id="project-description" name="project-description" className={inputClassName + ' resize-none scrollbar-custom no-scrollbar-arrows'} ref={refProjectDescription} ></textarea>
            </fieldset>

            <fieldset className={fieldsetClassName}>
                <label htmlFor="project-due-date" className={labelClassName}>Due Date</label>

                <input type="date" id="project-due-date" name="project-due-date" className={inputClassName} ref={refProjectDate} />
            </fieldset>
        </form>
    )
}