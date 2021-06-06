import React from 'react'

const Time = (props) => {
    return(
        <div className="time-item">
            {props.time.map(time => <div key={time.id} onClick={() => {props.setterTime(time.id, time.time)}}>
                <div>{time.time}</div>
            </div>)}
        </div>
    )
}

export default Time