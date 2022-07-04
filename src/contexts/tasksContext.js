import { createContext, useContext, useReducer } from "react";
import { tasksReducer } from "../reducer/tasksReducer";

const TasksContext = createContext([]);

const TasksProvider = ({ children }) => {
    
    const [ taskState, tasksDispatch ] = useReducer(tasksReducer, {tasks:[]});     

    return (
        <TasksContext.Provider value={{ taskState, tasksDispatch }}>
            {children}
        </TasksContext.Provider>
    )
}

const useTasks = () => useContext(TasksContext)

export {TasksProvider, useTasks}