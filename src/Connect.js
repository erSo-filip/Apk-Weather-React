import React from 'react';

const Connect = props => {
       
    const content = props.weather.list
		? props.weather.list
				.slice(0, 1)
				.map(w => (
                   <div> {w.weather[0].main}</div>
				))
		: "";

	return content;
 };

export default Connect;