/* import React, { useState } from "react";

const Weather = () => {

    const api = {
        key: "09dc836f290099621cc439767c9a4f3c",
        base: "https://api.openweathermap.org/data/2.5/"
      }

    const [weather, setWeather] = useState({});
    const [search, setSearch] = useState('');

    const newSearch = (event) => {
        if (event.key == 'Enter') {
            fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
                .then(res => res.json)
                .then(result => {
                    setWeather(result)
                    setSearch('')}
                    );
        }
    }

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

export {Weather, Search}; */