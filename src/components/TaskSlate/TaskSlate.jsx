import { useTasks } from "../../contexts/tasksContext";
import { useState } from "react";
import "./TaskSlate.css";
import { Modal } from "../Modal/Modal";
import { Link } from "react-router-dom";

export const TaskSlate = ({ id, task }) => {

    const [editModal, setEditModal] = useState(false);

    const {tasksDispatch} = useTasks();
    const {taskTitle, taskDescription, focusDuration, breakDuration} = task;

    const deleteTaskHandler = () => {
        tasksDispatch({type: "DELETE_TASK", payload: {...task}})
    }

    const editTaskHandler = () => {
        setEditModal(prevVal => !prevVal)
    }

    return (
        <div className="task-slate" key={task.id}>
            {editModal && (
        <Modal
          id={id}
          taskTitle={taskTitle}
          taskDescription={taskDescription}
          focusDuration={task.focusDuration}
          breakDuration={task.breakDuration}
          editModal={editModal}
          setEditModal={setEditModal}
        />
      )}
            <Link to="/pomodoro" state={{taskDetails: task}} className="pomodoro-link" >
                <div className="task-description">
                    <div className="task-title">{task.taskTitle}</div>
                    <div className="task-details">{`Focus duration: ${focusDuration}mins, Break duration: ${breakDuration}mins`}</div>
                </div>
            </Link>
            <div className="task-actions">
                <i className="fa-solid fa-pen-to-square edit-task-icon" onClick={editTaskHandler}></i>
                <i className="fa-solid fa-trash-can delete-icon" onClick={deleteTaskHandler}></i>
            </div>
        </div>
    )
}