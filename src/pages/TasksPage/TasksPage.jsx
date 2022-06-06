import { useState } from "react";
import { Modal } from "../../components/Modal/Modal";
import { Navbar } from "../../components/Navbar/Navbar";
import { TaskSlate } from "../../components/TaskSlate/TaskSlate";
import "./TasksPage.css";

export const TasksPage = () =>{
    const [ modal, setModal ] = useState(false);
    const [ tasks, setTasks ] = useState([]); 

    const modalSwitch = () => {
        setModal(prev=> !prev)
    }

    return (
        <div className="page-container">
            <Navbar />
            <main className="page-content tasks-page-content">
                {modal && <Modal modalSwitch={modalSwitch} setTasks={setTasks} />}
                <h1 className="page-main-heading">Welcome, User</h1>
                <h2 className="page-sub-heading">{tasks.length===0? "you have no tasks to complete you can add them below" : `You have ${tasks.length} ${tasks.length===1 ? "task" : "tasks"} to complete today, lets get started.`}</h2>
                <section className="tasks-section">
                    <div className="tasks-heading">
                        <h2>Tasks To-Do</h2>
                        <button
                        onClick={modalSwitch}
                        className="add-tasks-button floating-button">
                            +
                        </button>
                    </div>
                    <div className="tasks-body">
                        { tasks && tasks.map(task => <TaskSlate taskInfo={task} setTasks={setTasks} key={task.id} id={task.id} />)}
                        
                    </div>
                </section>
            </main>

        </div>
    )
}