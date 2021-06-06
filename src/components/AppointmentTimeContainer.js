import { connect } from "react-redux";
import AppointmentTime from "./AppointmentTIme";

const mapStateToProps = (state) => ({
    appointmentTime: state.appointment.appointmentTime 
})

const AppointmentTimeContainer = connect(mapStateToProps)(AppointmentTime)

export default AppointmentTimeContainer