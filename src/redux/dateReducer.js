let initialState = {
    date: [
        {
            id: 1,
            dayOfWeek: "Сегодня",
            day: "7",
            month: "Июня"
        },
        {
            id: 2,
            dayOfWeek: "Вт",
            day: "8",
            month: "Июня"
        },
        {
            id: 3,
            dayOfWeek: "Ср",
            day: "9",
            month: "Июня"
        },
        {
            id: 4,
            dayOfWeek: "ЧТ",
            day: "10",
            month: "Июня"
        },
        {
            id: 5,
            dayOfWeek: "Пт",
            day: "11",
            month: "Июня"
        }
    ]
}

const dateReducer = (state = initialState) => {
    return state
}

export default dateReducer
