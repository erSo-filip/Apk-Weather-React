import React from 'react';

const Result = props => {

    const {date, city, temp, press, wind, err, icon, humidity } = props.weather;

    const icona = `http://openweathermap.org/img/w/${icon}.png`;

    let tempe = Math.round(temp);

    const days = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
    

    let content = null;

    if(!err && city) {



        content = (
            <div>  
            <div className='anim'><img src={icona} alt=""/></div>
            <div className="W">{tempe} &#176;C</div>
            <div className="miasto">{city}</div>
             <div> {date}</div> 
             <button className="wiecej">\/</button>
             <div className="rozwi">
             <div>Ciśnienie: {press} hPa </div>
            <div>Szybkość wiatru: {wind} m/s </div>
            <div>Wilgotność {humidity} % </div> 
            </div>
            </div>
        )
    }

    return(
        <div className="result">
        {err ? `${city} nie ma takiego miasta` : content} 
         {/* <React.Fragment>
            <div>Pogoda dla: {city}</div>
            <div><img src={icona} alt=""/></div>
            <div> {date}</div>
            <div>temp {tempe}</div>
            <div>cis {press}</div>
            <div>wiatr {wind}</div>
            <div>wilg {humidity}</div>
        </React.Fragment>  */}
        </div>
    );
}
export default Result;
