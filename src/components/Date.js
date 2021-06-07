import React from 'react'

const Date = ({date, appointmentDateID, setterDate}) => {
    return(
        <div className="date-items" >
            {date.map(item => <div className={appointmentDateID === item.id ? "date-item date-item-active" : "date-item"} key={item.id} onClick={() => {setterDate(item.id, item.day, item.month)}}>
                <div className="date-item-day">{item.dayOfWeek}</div>
                <div className="date-item-time">{item.day}</div>
            </div>)}
        </div>
    )
}

export default Date