import "./Modal.css";

export const Modal = ({modalSwitch}) => {
    return (
        <div classname="modal-container">
            <div className="modal" onClick={modalSwitch}></div>
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="heading-2 modal-title">
                            Add Task
                        </div>
                    </div>
                    <div className="modal-body">
                        <form className="add-task-form">
                            <div className="input input-label-pair input-success">
                                <label className="input-label" htmlFor="task-name">Task Name</label>
                                <input type="text" name="task-name" placeholder="Please enter the name of your task" />
                                <div className="input-validation-success input-validation">Input Validation Successful</div>
                            </div>
                            <div className="input input-label-pair input-success">
                                <label className="input-label" htmlFor="task-description">Task Description</label>
                                <textarea name="task-description" id="" cols="20"  rows="5" placeholder="Please describe your task briefly"></textarea>
                                <div className="input-validation-success input-validation">Input Validation Successful</div>
                            </div>
                            <div class="input input-label-pair input-slider">
                                <label className="input-label" htmlFor="focus-duration">Focus Duration</label>
                                <input name="focus-duration" step={10} type="range" min="25" value={45} max="75" list="focus-data" />
                                <datalist id="focus-data">
                                    <option value="25" label="25m"></option>
                                    <option value="35" label="35m"></option>
                                    <option value="45" label="45m"></option>
                                    <option value="55" label="55m"></option>
                                    <option value="65" label="65m"></option>
                                    <option value="75" label="75m"></option>
                                </datalist>
                            </div>
                            <div class="input input-label-pair input-slider">
                                <label className="input-label break-slider" htmlFor="break-duration">Break Duration</label>
                                <input name="break-duration" step={5} type="range" min="5" value={15} max="30" list="break-data" />
                                <datalist id="break-data">
                                    <option value="5" label="5m"></option>
                                    <option value="10" label="10m"></option>
                                    <option value="15" label="15m"></option>
                                    <option value="20" label="20m"></option>
                                    <option value="25" label="25m"></option>
                                    <option value="30" label="30m"></option>
                                </datalist>
                            </div>
                        </form>
                    </div>
                    <div className="modal-action">
                        <button className="button" onClick={modalSwitch}>Close</button>
                        <button className="button">Add</button>
                    </div>
                </div>
        </div>
        
    )
}