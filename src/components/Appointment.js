import React, { useEffect, useContext } from 'react'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import {Context} from '../index'
import AppointmentDateContainer from './AppointmentDateContainer'
import AppointmentTimeContainer from './AppointmentTimeContainer' 
import Loader from './Loader'

const Appointment = ({setState, appointment}) => {

	const setAppointment = async () => {
		firestore.collection('appointment').doc('6XfiuUQpgjhQqMRhzIw9').set({
			appointmentTime: {
				id: appointment.appointmentTime.id,
				time: appointment.appointmentTime.time
			},
			appointmentDate: {
				id: appointment.appointmentDate.id,
				day: appointment.appointmentDate.day,
				month: appointment.appointmentDate.month
			}
		})
	}

    const {firestore} = useContext(Context)
    const [appointmentDB = [], loading] = useCollectionData(firestore.collection('appointment'))

    useEffect(() => {
        if(!loading) setState(appointmentDB[0].appointmentTime, appointmentDB[0].appointmentDate)
      }, [appointmentDB]);

    if(loading) return <Loader/>

    return(
        <div className="appointment">
			<div className="date-time">
				<AppointmentDateContainer/>
				<AppointmentTimeContainer/>
			</div>
			<button className="appointment-button" onClick={setAppointment}>Записаться на бесплатную встречу</button>
		</div>
    )
}

export default Appointment