const initialState = {
  buyers: [],
  buyer: null,
  createStatus: false,
  deleteStatus: false,
};

const buyerReducer = (state = initialState, action) => {
  if (action.type == "FETCH_BUYERS_FULFILLED") {
    console.log(action.payload);
    return {
      ...state,
      buyers: action.payload,
    };
  }else if (action.type == "GET_BUYER_BY_ID_FULFILLED"){
    return {
      ...state,
      buyer: action.payload,
    };
  }
  else {
    return state;
  }
};

export default buyerReducer;
