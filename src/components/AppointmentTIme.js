import React from 'react'

const AppointmentTime = (props) => {
    return(
        <div>
            <div>{props.appointmentTime.time}</div>
        </div>
    )
}

export default AppointmentTime