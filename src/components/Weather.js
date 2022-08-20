import React, { useState } from "react";

const Weather = () => {

    const [weather, setWeather] = useState({});

    return (
        <div className='weather-box'>
            <div className='temp'>
                temp
            </div>
            <div className='weather'>
                weather
            </div>
        </div>
    );
}

export default Weather;