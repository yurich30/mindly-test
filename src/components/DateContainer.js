import { connect } from "react-redux";
import { setDateAc } from "../redux/appointmentReducer";
import Date from "./Date";

const mapStateToProps = (state) => ({
    date: state.date.date,
    appointmentDateID: state.appointment.appointmentDate.id
})

const mapDispatchToProps = (dispatch) => ({
    setterDate: (id, day, month) => dispatch(setDateAc(id, day, month))
})

const DateContainer = connect(mapStateToProps, mapDispatchToProps)(Date)

export default DateContainer