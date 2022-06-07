import { useTasks } from "../../contexts/tasksContext";
import "./TaskSlate.css";

export const TaskSlate = ({ id }) => {
    const {taskInfo, setTasks} = useTasks();
    const {taskTitle, focusDuration, breakDuration} = taskInfo;

    const deleteTaskHandler = () => {
        setTasks(prevVal=>{
            return prevVal.filter(task=>  task.id!== id)
        })
    }


    return (
        <div className="task-slate">
            <div className="task-description">
                <div className="task-title">{taskTitle}</div>
                <div className="task-details">{`Focus duration: ${focusDuration}mins, Break duration: ${breakDuration}mins`}</div>
            </div>
            <div className="task-actions">
                <i className="fa-solid fa-pen-to-square edit-task-icon"></i>
                <i className="fa-solid fa-trash-can delete-icon" onClick={deleteTaskHandler}></i>
            </div>
        </div>
    )
}