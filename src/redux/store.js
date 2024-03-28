import {createStore, applyMiddleware} from 'redux'
import rootReducer from './rootReducer'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import seed from "./Kanban/seed"

const store = createStore(
    rootReducer
    ,{},
    applyMiddleware(thunk , promise)
    )

    console.log(store.getState());
    const st = store.getState()
    console.log(st.boards)
    if (!st.boards.lists.length) {
      console.log("SEED");
     // seed(store);
    }  

export default store