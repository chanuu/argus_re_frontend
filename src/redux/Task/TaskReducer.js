const initialState = {
    tasks : [],
    tasksOfSelectedCompany : [],
    taksByProject:[],
    createTaskSucess:false
}

const taskReducer = (state = initialState , action) => {
    console.log(action.type);
    if(action.type == "FETCH_TASKS_FULFILLED"){
       
        return {
            ...state,
            tasks : action.payload
        }
    } if(action.type == "FETCH_DATA_SUCCESS_FULFILLED"){
       
        return {
            ...state,
            tasks : action.payload
        }
    }else if(action.type == "CREATE_TASK_FULFILLED"){
        
        return{
            ...state,
            taksByProject:[...state.taksByProject , action.payload]
        }
    }if(action.type == "GET_TASK_BY_PROJECT_ID_FULFILLED"){
       
        return {
            ...state,
            taksByProject : action.payload
        }
}
if(action.type == "CREATE_TASK_DATA_SUCSESS"){
       
    return {
        ...state,
        createTaskSucess : true
    }
}
if(action.type == "CREATE_TASK_DATA_ERROR"){
       
    return {
        ...state,
        createTaskSucess : action.payload
    }
}
else{
        return state
    }
    
}

export default taskReducer
