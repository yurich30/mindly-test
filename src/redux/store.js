import { combineReducers, createStore } from "redux"
import appointmentReducer from "./appointmentReducer"
import dateReducer from "./dateReducer"
import timeReducer from "./timeReducer"


let reducers = combineReducers({
    date: dateReducer,
    time: timeReducer,
    appointment: appointmentReducer
})

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store