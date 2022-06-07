import { createContext, useContext, useState } from "react";

const TasksContext = createContext([]);

const TasksProvider = ({children}) => {
    const [ taskInfo, setTaskInfo ] = useState({
        id: "",
        taskTitle: "",
        taskDescription: "",
        focusDuration: 45,
        breakDuration: 15
    })
    const [ modal, setModal ] = useState(false);
    const [ tasks, setTasks ] = useState([]); 

    const modalSwitch = () => {
        setModal(prev=> !prev)
    }

    return (
        <TasksContext.Provider value={{taskInfo, setTaskInfo, modal, modalSwitch, tasks, setTasks}}>children</TasksContext.Provider>
    )
}

const useTasks = () => useContext(TasksContext)

export {TasksProvider, useTasks}