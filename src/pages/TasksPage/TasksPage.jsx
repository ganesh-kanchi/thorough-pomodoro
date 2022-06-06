import { useState } from "react";
import { Modal } from "../../components/Modal/Modal";
import { Navbar } from "../../components/Navbar/Navbar";
import { TaskSlate } from "../../components/TaskSlate/TaskSlate";
import "./TasksPage.css";

export const TasksPage = () =>{
    const [ modal, setModal ] = useState(false);

    const modalSwitch = () => {
        setModal(prev=> !prev)
    }

    return (
        <div className="page-container">
            <Navbar />
            <main className="page-content tasks-page-content">
                {modal && <Modal modalSwitch={modalSwitch} />}
                <h1 className="page-main-heading">Welcome, User</h1>
                <h2 className="page-sub-heading">You have 1 task to complete today, let's get started.</h2>
                <section className="tasks-section">
                    <div className="tasks-heading">
                        <h2>Tasks To-Do</h2>
                        <button
                        onClick={()=>setModal(true)}
                        className="add-tasks-button floating-button">
                            +
                        </button>
                    </div>
                    <div className="tasks-body">
                        <TaskSlate />
                        
                    </div>
                </section>
            </main>

        </div>
    )
}