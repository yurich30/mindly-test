const SET_TIME = "SET_TIME"
const SET_DATE = "SET_DATE"
const SET_STATE = "SET_STATE"

let initialState = {
    appointmentTime: {
        id:0,
        time: "0"
    },
    appointmentDate: {
        id:0,
        day: "0",
        month: "0"
    }
}

const appointmentReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_STATE: 
            return {...state, appointmentTime: action.appointmentTime, appointmentDate: action.appointmentDate}
        case SET_TIME: 
            return {...state, appointmentTime: action.data}
        case SET_DATE: 
            return {...state, appointmentDate: action.data}
        default: return state
    }
}

export const setTimeAC = (id, time) => ({type: SET_TIME, data: {id, time}})
export const setDateAc = (id, day, month) => ({type: SET_DATE, data: {id, day, month}})
export const setStateAC = (appointmentTime, appointmentDate) => ({type: SET_STATE, appointmentTime, appointmentDate})

export default appointmentReducer