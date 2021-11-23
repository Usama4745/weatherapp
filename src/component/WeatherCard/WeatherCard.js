import React from 'react';
import './WeatherCard.css';

function WeatherCard({forecast}) {
    return (
        <div className="card">
            <div className="forecasttemperature">temperature: {forecast && forecast.main.temp} &#176;C</div>
            <div className="forecasttemperature">date: {forecast && new Date(forecast.dt_txt).toDateString()}</div>
            <div className="forecasttemperature">weather condition: {forecast && forecast.weather[0].main}</div>
            <div className="forecasttemperature">heighest and lowest temp: {forecast && forecast.main.temp_min} &#176;C - {forecast && forecast.main.temp_max} &#176;C</div>
        </div>
    );
}

export default WeatherCard;
