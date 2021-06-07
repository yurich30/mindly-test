import React from 'react'

const Time = ({time, setterTime, appointmentTime}) => {
    return(
        <div className="time-item">
            {time.map(time => <div key={time.id} className={appointmentTime.id === time.id ? "active" : ""} onClick={() => {setterTime(time.id, time.time)}}>
                <div>{time.time}</div>
            </div>)}
        </div>
    )
}

export default Time