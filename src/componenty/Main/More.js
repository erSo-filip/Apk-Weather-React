import React from 'react';

const More = props => {
    
        const content = props.more.list
        ? props.more.list
            .slice(0, 1)
            .map(w => (
        <div className="rozwi">
                <p>{Math.round(w.main.temp_min)} &#176;C &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; { Math.round(w.main.temp_max)} &#176;C</p>
                <p className="linia"> &nbsp;&nbsp;MIN<i className="demo-icon icon-thermometer-0"></i>&nbsp;&nbsp;  MAX<i className="demo-icon icon-thermometer-3"></i></p>
                <div><i className="demo-icon icon-gauge"></i> Ciśnienie: {w.main.pressure} hPa </div>
               <div><i className="demo-icon icon-air"></i> Szybkość Wiatru: {w.wind.speed} km/h </div>
               <div><i className="demo-icon icon-tint"></i> Wilgotność: {w.main.humidity} % </div> 
            </div>
    ))
    :"";
    return content;
    
}

export default More;