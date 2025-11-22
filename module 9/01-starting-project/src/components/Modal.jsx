import { useImperativeHandle, useRef } from "react";
import { createPortal } from 'react-dom';

export default function Modal({ ref, text }) {
    const modal = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                modal.current.showModal();
            }
        }
    });

    return createPortal (    
        <dialog ref={modal} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
            <h2 className="text-2xl font-bold text-stone-700 mb-8">{text}</h2> 
            <form method="dialog" className="flex justify-end">
                <button className="px-6 py-2 text-xs md:text-base rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 hover:text-stone-100">Close</button>
            </form>
        </dialog>,

        document.getElementById('modal-root')
    );
}