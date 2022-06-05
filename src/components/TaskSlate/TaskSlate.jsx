import "./TaskSlate.css";

export const TaskSlate = (props) => {
    return (
        <div className="task-slate">
            <div className="task-description">
                <div className="task-title">Make project</div>
                <div className="task-details">Focus duration: 25mins, Break duration: 5mins</div>
            </div>
            <div className="task-actions">
                <i class="fa-solid fa-pen-to-square edit-task-icon"></i>
                <i class="fa-solid fa-trash-can delete-icon"></i>
            </div>
        </div>
    )
}