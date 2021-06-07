import { connect } from "react-redux";
import {setStateAC} from "../redux/appointmentReducer"
import Appointment from "./Appointment";

const mapStateToProps = (state) => ({
    appointment: state.appointment
})

const mapDispatchToProps = (dispatch) => ({
    setState: (appointmentTime, appointmentDate) => dispatch(setStateAC(appointmentTime, appointmentDate))
})

const AppointmentContainer = connect(mapStateToProps, mapDispatchToProps)(Appointment)

export default AppointmentContainer