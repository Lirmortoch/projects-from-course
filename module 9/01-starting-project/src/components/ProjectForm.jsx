import { useRef } from "react";

function FormGroup({ label, id, inputRef, type }) {
    const fieldsetClassName = 'flex flex-col gap-1 my-4';
    const labelClassName = 'text-sm font-bold uppercase text-stone-600';
    const inputClassName = 'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-900 focus:outline-none focus:border-stone-600';

    return (
        <fieldset className={fieldsetClassName}>
            <label htmlFor={id} className={labelClassName}>{label}</label>

            {type === 'textarea' ? <textarea className={inputClassName + ' resize-none scrollbar-custom no-scrollbar-arrows'} ref={inputRef} id={id} name={id}></textarea> : <input type={type} id={id} name={id} className={inputClassName} ref={inputRef} /> }
        </fieldset>
    )
}

export default function ProjectForm({ handleSetProjects, handleSetProject }) {
    const refProjectTitle = useRef();
    const refProjectDescription = useRef();
    const refProjectDate = useRef();

    function onSave() {
        handleSetProjects(refProjectTitle.current.value, refProjectDescription.current.value, refProjectDate.current.value)

        handleSetProject('default');
    }

    return (
        <form className="w-[35rem] mt-16" onSubmit={(e) => e.preventDefault()}>
            <fieldset className='flex flex-row gap-4 my-4 justify-end'>
                <button type="submit" onClick={() => handleSetProject('default')} className="text-stone-850 hover:text-red-700">Cancel</button>

                <button type="submit" onClick={onSave} className="px-6 py-2 text-xs md:text-base rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 hover:text-stone-100">Save</button>
            </fieldset>
            
            <FormGroup label={'Title'} id={'project-title'} inputRef={refProjectTitle} type={'text'} />

            <FormGroup label={'Description'} id={'project-description'} inputRef={refProjectDescription} type={'textarea'} />
            
            <FormGroup label={'Due Date'} id={'project-due-date'} inputRef={refProjectDate} type={'date'} />
        </form>
    )
}