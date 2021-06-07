import React from 'react'

const AppointmentTime = (props) => {
    return(
        <div className="appointment-time">
            <div>Время</div>
            <div className="appointment-time-item">{props.appointmentTime.time}</div>
        </div>
    )
}

export default AppointmentTime