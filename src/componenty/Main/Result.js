import React from 'react';
import Wykres from './Wykres';
import More from './More';

const days = ["Niedz", "Pon", "Wt", "Śr", "Czw", "Pt", "Sob"];

const time = new Date(); 

const Result = props => {
   const weather = props.weather
	const content = props.weather.list
		? props.weather.list
				.slice(0, 1)
				.map(w => (
					<div className="result">
            <div className='anim'><img src={`http://openweathermap.org/img/w/${w.weather[0].icon}.png`} alt=""/></div>
                <h1 className="W">{ Math.round(w.main.temp)}&#176;C</h1><button className='click'></button> 
                  <Wykres wykres={weather} legendPosition="bottom"/>
                 <p className="temp">{ Math.round(w.main.temp*1.8+32)}&#176;F </p>
                <p className="tempe">{ Math.round(w.main.temp+273)} K</p>
                <h2 className="miasto">{props.c}</h2>
                 <h5> {days[time.getDay()]}, {time.getHours()}:{time.getMinutes()<10 ? "0"+time.getMinutes() : time.getMinutes()}</h5> 
             <button className="wiecej"><i className="demo-icon icon-sort-alt-up"></i></button>
             <More more={weather} />
         </div>
				))
		: "";

	return content;
};

export default Result;
