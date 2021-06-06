const SET_TIME = "SET_TIME"
const SET_DATE = "SET_DATE"

let initialState = {
    appointmentTime: {
        id:1,
        time: "10:00"
    },
    appointmentDate: {
        id:1,
        day: "7",
        month: "июня"
    }
}

const appointmentReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_TIME: 
            return {...state, appointmentTime: action.data}
        case SET_DATE: 
            return {...state, appointmentDate: action.data}
        default: return state
    }
}

export const setTimeAC = (id, time) => ({type: SET_TIME, data: {id, time}})
export const setDateAc = (id, day, month) => ({type: SET_DATE, data: {id, day, month}})

export default appointmentReducer