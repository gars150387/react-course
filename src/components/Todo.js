import { useState } from "react";
import { Modal } from "./Modal";

export const Todo = (props) => {
    const [modalIsOpen, setModalIsOpen] =useState(false);
    const deleteHandler = () =>{
        setModalIsOpen(true)
    }


    return (
        <div className="card">
            <h1>{props.text}</h1>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
            {modalIsOpen && <Modal/>}
        </div>
    )
}