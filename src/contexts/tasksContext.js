import { createContext, useContext, useReducer, useEffect } from "react";
import { tasksReducer } from "../reducer/tasksReducer";

const TasksContext = createContext([]);

const TasksProvider = ({ children }) => {
    
    const [ taskState, tasksDispatch ] = useReducer(tasksReducer, {
        tasks: JSON.parse(localStorage.getItem("tasks-item")) ?? []
    });  
    
    

    useEffect(() => {
        localStorage.setItem("tasks-item", JSON.stringify(taskState.tasks));
    }, [taskState]);

    return (
        <TasksContext.Provider value={{ taskState, tasksDispatch }}>
            {children}
        </TasksContext.Provider>
    )
}

const useTasks = () => useContext(TasksContext)

export {TasksProvider, useTasks}