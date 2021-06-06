import './App.css';
import Avatar from './images/avatar.png'
import Disable from './images/disable.png'
import Calendar from './images/calendar.png'	
import DateContainer from './components/DateContainer';
import TimeContainer from './components/TimeContainer';
import AppointmentDateContainer from './components/AppointmentDateContainer';
import AppointmentTimeContainer from './components/AppointmentTimeContainer';

function App() {
  return (
    <div className="container">
		<div className="name">Алексей Карачинский</div>
		<div className="info">
			<div className="avatar">
				<img src={Avatar} alt="Avatar" />
			</div>
			<div className="description">
				Длительность консультации
				<div className="time-span">50 минут</div>
			</div>
		</div>
		<div className="date">
			<div className="possible-date">Возможная дата</div>
			<div className="date-icons">
				<img src={Disable} alt="" />
				<img src={Calendar} alt="" />
			</div>
		</div>
		<DateContainer/>
		<div className="time">Свободное время</div>
		<TimeContainer/>
		<div className="appointment">
			<div className="date-time">
				{/* <div className="appointment-date">
					<div>Дата</div>
					<div>26 мая</div>
				</div>
				<div className="appointment-time">
					<div>Время</div>
					<div>18:30</div>
				</div> */}
				<AppointmentDateContainer/>
				<AppointmentTimeContainer/>
			</div>
			<button className="appointment-button">Записаться на бесплатную встречу</button>
		</div>
    </div>
  );
}

export default App;
