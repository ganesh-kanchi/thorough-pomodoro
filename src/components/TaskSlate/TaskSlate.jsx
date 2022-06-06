import "./TaskSlate.css";

export const TaskSlate = (props) => {
    const {taskTitle, focusDuration, breakDuration} = props.taskInfo;

    return (
        <div className="task-slate">
            <div className="task-description">
                <div className="task-title">{taskTitle}</div>
                <div className="task-details">{`Focus duration: ${focusDuration}mins, Break duration: ${breakDuration}mins`}</div>
            </div>
            <div className="task-actions">
                <i className="fa-solid fa-pen-to-square edit-task-icon"></i>
                <i className="fa-solid fa-trash-can delete-icon"></i>
            </div>
        </div>
    )
}