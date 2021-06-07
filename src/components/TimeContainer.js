import { connect } from "react-redux";
import { setTimeAC } from "../redux/appointmentReducer";
import Time from "./Time";

const mapStateToProps = (state) => ({
    time: state.time.time,
    appointmentTime: state.appointment.appointmentTime
})

const mapDispatchToProps = (dispatch) => ({
    setterTime: (id, time) => dispatch(setTimeAC(id, time))
})

const TimeContainer = connect(mapStateToProps, mapDispatchToProps)(Time)

export default TimeContainer