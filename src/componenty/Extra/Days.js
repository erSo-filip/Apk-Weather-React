import React from "react";

const days = ["Niedz", "Pon", "Wt", "Śr", "Czw", "Pt", "Sob"];

 
const Days = props => {
	const content = props.weather.list
		? props.weather.list
				.filter(e => {
					const hour = new Date(e.dt_txt).getHours();
					return hour === 12;
				})
				.slice(0, 3)
				.map(w => (
					<div className="day" key={w.dt}>
						<h2>{Math.round(w.main.temp)}&#176;C</h2>
						<img src={`http://openweathermap.org/img/w/${w.weather[0].icon}.png`} alt="" className="obr" />
						<h3>{days[new Date(w.dt_txt).getDay()]}</h3>
					</div>
				))
		: "";

	return content;
};

export default Days;