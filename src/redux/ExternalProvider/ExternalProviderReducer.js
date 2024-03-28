
const initialState = {
    externalProviders : [],
    externalProviders : []
    
}

const externalProviderReducer = (state = initialState , action) => {
   
    if(action.type == "FETCH_EXTERNAL_PROVIDERS_FULFILLED"){
       console.log(action.payload);
        return {
            ...state,
            externalProviders : action.payload
        }
    }else if(action.type == "CREATE_EXTERNAL_PROVIDERS_FULFILLED"){
        return{
            ...state,
            externalProviders:[...state.documents , action.payload]
        }
        
    }
    
    else{
        return state
    }
    
}

export default externalProviderReducer