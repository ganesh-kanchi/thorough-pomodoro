import "./Modal.css";
import { v4 as uuidv4 } from "uuid";
import { useTasks } from "../../contexts/tasksContext";

export const Modal = ({modalSwitch, setTasks}) => {
    const {taskInfo, setTaskInfo} = useTasks();    

    const {taskTitle, taskDescription, focusDuration, breakDuration} = taskInfo;

    const taskOnChangeHandler = (e) => {
        switch (e.target.name) {
            case "task-name":
                setTaskInfo(prevVal => ({...prevVal, taskTitle: e.target.value}))
                break;
            case "task-description":
                setTaskInfo(prevVal => ({...prevVal, taskDescription: e.target.value}))
                break;
            case "focus-duration":
                setTaskInfo(prevVal => ({...prevVal, focusDuration: e.target.value}))
                break;
            case "break-duration":
                setTaskInfo(prevVal => ({...prevVal, breakDuration: e.target.value}))
                break;
            default:
                break;
        }
    }

    const addTaskHandler = (e) => {
        e.preventDefault();
        setTasks(prevVal => {
            return [...prevVal, {...taskInfo, id: uuidv4()}]
        })
        modalSwitch()
        setTaskInfo({
            id: "",
            taskTitle: "",
            taskDescription: "",
            focusDuration: 45,
            breakDuration: 15
        })
    }

    return (
        <div className="modal-container">
            <div className="modal" onClick={modalSwitch}></div>
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="heading-2 modal-title"> Add Task </div>
                    </div>
                    <div className="modal-body">
                        <form className="add-task-form" onSubmit={addTaskHandler}>
                            <div className={`input input-label-pair input-${taskTitle.length>=5 ? "success" : taskTitle.length===0 ? "error" : "warning" }`}>
                                <label className="input-label" htmlFor="task-name">Task Name</label>
                                <input type="text" value={taskTitle} name="task-name" onChange={taskOnChangeHandler} placeholder="Please enter the name of your task" />
                            </div>
                            <div className={`input input-label-pair input-${taskDescription.length>=10 ? "success" : taskDescription.length===0 ? "error" : "warning" }`}>
                                <label className="input-label" htmlFor="task-description">Task Description</label>
                                <textarea name="task-description" value={taskDescription} onChange={taskOnChangeHandler} cols="20"  rows="5" placeholder="Please describe your task briefly"></textarea>
                                <div className={`input-validation-${taskDescription.length>=10 && taskTitle.length>=5 ? "success" : taskDescription.length===0 || taskTitle.length===0 ? "error" : "warning" } input-validation`}>{taskTitle.length >= 5 && taskDescription.length>=10 ? "Task Info validation successful!" : taskTitle.length===0 || taskDescription.length===0 ? "Please enter a task name and task description" : "Try a longer name or description" }</div>
                            </div>
                            <div className="input input-label-pair input-slider">
                                <label className="input-label" htmlFor="focus-duration">Focus Duration</label>
                                <input name="focus-duration" step={10} onChange={taskOnChangeHandler} type="range" min="25" value={focusDuration} max="75" list="focus-data" />
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
                                <input name="break-duration" step={5} onChange={taskOnChangeHandler} type="range" min="5" value={breakDuration} max="30" list="break-data" />
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
                                <button className="button" onClick={modalSwitch}>Close</button>
                                <button type="submit" className="button" disabled={taskTitle.length<=5 || taskDescription.length<=10}>Add</button>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
        
    )
}