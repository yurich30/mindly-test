import React from 'react'

const Date = (props) => {
    const dateItems = props.date.date
    return(
        <div className="date-items" >
            {dateItems.map(item => <div key={item.id} onClick={() => {props.setterDate(item.id, item.day, item.month)}}>
                <div>{item.dayOfWeek}</div>
                <div>{item.day}</div>
            </div>)}
        </div>
    )
}

export default Date