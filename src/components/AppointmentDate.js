import React from 'react'

const AppointmentDate = (props) => {
    return(
        <div className="appointment-date">
            <div className="appointment-date-item">Дата</div>
            <div className="appointment-date-time">
                <div className="appointment-day">{props.appointment.day}</div>
                <div className="date-item-month">{props.appointment.month}</div>
            </div>
        </div>
    )
}

export default AppointmentDate