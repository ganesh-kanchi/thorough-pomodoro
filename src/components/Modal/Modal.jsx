import "./Modal.css";
import { v4 as uuidv4 } from "uuid";
import { useTasks } from "../../contexts/tasksContext";
import { useState } from "react";

export const Modal = ({
    id,
    taskTitle = "",
    taskDescription = "",
    focusDuration = 45,
    breakDuration = 15,
    editModal,
    setEditModal,
    modalSwitch
    }) => {
    const [ taskInfo, setTaskInfo ] = useState({
        id,
        taskTitle,
        taskDescription,
        focusDuration,
        breakDuration
    })

    const {taskState, tasksDispatch } = useTasks();    

    const taskOnChangeHandler = (e) => {
        const {name, value} = e.target;
        setTaskInfo(prevVal => ({ ...prevVal, [name]: value }))
    }

    const addTaskHandler = (e) => {
        e.preventDefault();

        if(editModal){
            let editedTasks = taskState.tasks.map( task => {
                return task.id === taskInfo.id ? taskInfo : task;
            })
            tasksDispatch({type: "EDIT_TASK", payload: editedTasks})
            setEditModal(false)
        } else{
            tasksDispatch({type: "ADD_NEW_TASK", payload: {...taskInfo, id: uuidv4()}})
            modalSwitch()
        }
    }

    return (
        <div className="modal-container">
            <div className="modal" onClick={()=>editModal ? setEditModal(prev=> !prev) : modalSwitch() }></div>
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="heading-2 modal-title"> Add Task </div>
                    </div>
                    <div className="modal-body">
                        <form className="add-task-form" onSubmit={addTaskHandler}>
                            <div className={`input input-label-pair input-${taskInfo.taskTitle.length>=5 ? "success" : taskInfo.taskTitle.length===0 ? "error" : "warning" }`}>
                                <label className="input-label" htmlFor="task-name">Task Name</label>
                                <input type="text" value={taskInfo.taskTitle} name="taskTitle" onChange={taskOnChangeHandler} placeholder="Please enter the name of your task" />
                            </div>
                            <div className={`input input-label-pair input-${taskInfo.taskDescription.length>=10 ? "success" : taskInfo.taskDescription.length===0 ? "error" : "warning" }`}>
                                <label className="input-label" htmlFor="task-description">Task Description</label>
                                <textarea name="taskDescription" value={taskInfo.taskDescription} onChange={taskOnChangeHandler} cols="20"  rows="5" placeholder="Please describe your task briefly"></textarea>
                                <div className={`input-validation-${taskInfo.taskDescription.length>=10 && taskInfo.taskTitle.length>=5 ? "success" : taskInfo.taskDescription.length===0 || taskInfo.taskTitle.length===0 ? "error" : "warning" } input-validation`}>{taskInfo.taskTitle.length >= 5 && taskInfo.taskDescription.length>=10 ? "Task Info validation successful!" : taskInfo.taskTitle.length===0 || taskInfo.taskDescription.length===0 ? "Please enter a task name and task description" : "Try a longer name or description" }</div>
                            </div>
                            <div className="input input-label-pair input-slider">
                                <label className="input-label" htmlFor="focus-duration">Focus Duration</label>
                                <input name="focusDuration" step={10} onChange={taskOnChangeHandler} type="range" min="25" value={taskInfo.focusDuration} max="75" list="focus-data" />
                                <datalist id="focus-data">
                                    <option value="25" label="25m"></option>
                                    <option value="35" label="35m"></option>
                                    <option value="45" label="45m"></option>
                                    <option value="55" label="55m"></option>
                                    <option value="65" label="65m"></option>
                                    <option value="75" label="75m"></option>
                                </datalist>
                            </div>
                            <div className="input input-label-pair input-slider">
                                <label className="input-label break-slider" htmlFor="break-duration">Break Duration</label>
                                <input name="breakDuration" step={5} onChange={taskOnChangeHandler} type="range" min="5" value={taskInfo.breakDuration} max="30" list="break-data" />
                                <datalist id="break-data">
                                    <option value="5" label="5m"></option>
                                    <option value="10" label="10m"></option>
                                    <option value="15" label="15m"></option>
                                    <option value="20" label="20m"></option>
                                    <option value="25" label="25m"></option>
                                    <option value="30" label="30m"></option>
                                </datalist>
                            </div>
                            <div className="modal-action">
                                <button className="button modal-button" onClick={() => editModal ? setEditModal(prev=> !prev) : modalSwitch() }>Close</button>
                                <button type="submit" className="button modal-button" disabled={taskInfo.taskTitle.length<=5 || taskInfo.taskDescription.length<=10}>{editModal?"Edit":"Add"}</button>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
        
    )
}