import React from 'react';

const Day1 = props => {

    const {date1, city, temp1, err, icon1 } = props.weather;

    const icona = `http://openweathermap.org/img/w/${icon1}.png`;

    let tempe = Math.round(temp1);

    let content = null;

    if(!err && city) {
        content = (
            <div className="day1"> 
            <h2>{tempe}&#176;C</h2>
            <img src={icona} alt="" className="obr"/>
            <h3>{date1}</h3>
            </div>
        )
    }

    return(
        <div >
        {err ? '' : content} 

        </div>
    );
}

export default Day1;