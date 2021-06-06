import React from 'react'

const AppointmentDate = (props) => {
    return(
        <div className="appointment-date">
            <div>Дата</div>
            <div>
                <div>{props.appointment.day}</div>
                <div>{props.appointment.month}</div>
            </div>
        </div>
    )
}

export default AppointmentDate