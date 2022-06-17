export const tasksReducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case "ADD_NEW_TASK":
            return ({...state, tasks:[...state.tasks,
                {...payload}
            ]})

        case "DELETE_TASK":
            return ({...state, tasks:state.tasks.filter(task => task.id!== payload.id)})
    
        case "EDIT_TASK":
            return ({...state, tasks: [...payload]})
        default:
            break;
    }
}