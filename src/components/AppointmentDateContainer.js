import { connect } from "react-redux";
import AppointmentDate from "./AppointmentDate";

const mapStateToProps = (state) => ({
    appointment: state.appointment.appointmentDate
})

const AppointmentDateContainer = connect(mapStateToProps)(AppointmentDate)

export default AppointmentDateContainer