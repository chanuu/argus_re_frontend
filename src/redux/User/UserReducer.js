const initialState = {
  users: [],
  usersOfSelectedCompany: [],
  userbyId: {},

  user: null,
  tktOwner: null,
  login: localStorage.getItem("Token") != null ? true : false,
};

const userReducer = (state = initialState, action) => {
  if (action.type == "FETCH_USERS_FULFILLED") {
    return {
      ...state,
      users: action.payload,
    };
  } else if (action.type == "DELETE_USER_FULFILLED") {
    return {
      ...state,
      brands: [...state.users, action.payload],
    };
  } else if (action.type == "GET_USER_BY_ID_FULFILLED") {
    console.log("Hit");
    return {
      ...state,
      userbyId: action.payload,
    };
  } else if (action.type == "LOG_USERS_FULFILLED") {
    localStorage.setItem("Token", action.payload.token);
    return {
      ...state,
      user: action.payload,
      login: true,
    };
  } 
  else {
    return state;
  }
};

export default userReducer;
