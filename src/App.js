import './App.css';
import Avatar from './images/avatar.png'
import Disable from './images/disable.png'
import Calendar from './images/calendar.png'	

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
		<div className="date-items">
			//
		</div>
		<div className="time">Свободное время</div>
		<div className="time-item">
			//
		</div>
		<div className="appointment">
			<div className="date-time">
				<div className="appointment-date">
					<div>Дата</div>
					<div>26 мая</div>
				</div>
				<div className="appointment-time">
					<div>Время</div>
					<div>18:30</div>
				</div>
			</div>
			<button className="appointment-button">Записаться на бесплатную встречу</button>
		</div>
    </div>
  );
}

export default App;
