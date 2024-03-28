const initialState = {
  projects: [],
  projectsByOwner: [],
  project: [],
  taksByProject: [],
  CREATE_TASK_DATA_SUCCESS: "",
};

const projectReducer = (state = initialState, action) => {
  console.log(action.type);

  if (action.type == "FETCH_PROJECTS_FULFILLED") {
    return {
      ...state,
      projects: action.payload,
    };
  } else if (action.type == "CREATE_PROJECT_FULFILLED") {
    return {
      ...state,
      projects: [...state.projects, action.payload],
    };
  } else if (action.type == "GET_PROJECT_BY_ID_FULFILLED") {
    return {
      ...state,
      project: action.payload,
    };
  } else if (action.type == "CREATE_PROJECT_DATA_SUCCESS") {
    return {
      ...state,
      CREATE_TASK_DATA_SUCCESS: "Create Project Sucessfuly !",
    };
  } else if (action.type == "CREATE_PROJECT_DATA_ERROR") {
    return {
      ...state,
      CREATE_TASK_DATA_SUCCESS: action.payload,
    };
  } else if (action.type == "DELETE_DOCUMENT_FULFILLED") {
    return {
      ...state,
      projects: [...state.projects, action.payload],
    };
  } else {
    return state;
  }
};

export default projectReducer;
