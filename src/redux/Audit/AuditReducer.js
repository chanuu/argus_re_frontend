const initialState = {
  audits: [],
  audit: null,
  createStatus: false,
  deleteStatus: false,
};

const auditReducer = (state = initialState, action) => {
  if (action.type == "FETCH_AUDITS_FULFILLED") {
    console.log(action.payload);
    return {
      ...state,
      audits: action.payload,
    };
  } else if (action.type == "CREATE_AUDIT_FULFILLED") {
    return {
      ...state,
      audits: [...state.audits, action.payload],
      createStatus: true,
    };
  } else if (action.type == "GET_AUDIT_BY_ID_FULFILLED") {
    console.log(action.payload);
    return {
      ...state,
      audit: action.payload,
    };
  } else {
    return state;
  }
};

export default auditReducer;
