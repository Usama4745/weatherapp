import React, { useEffect, useState } from 'react';
import './Home.css'
import Search from './Search/Search';
import Converter from './Converter/Converter';
import WeatherCard from './WeatherCard/WeatherCard';
import axios from 'axios';

function Home() {
    const [weatherData, setWeatherData] = useState();
    const [forecast, setForecastData] = useState();
    const [location, setLocation] = useState("islamabad");
    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=0327c3c2d2a39fbebaba8d1ec7813719&units=metric')
            .then(response => { console.log((response.data)); setWeatherData(response.data) })
        axios.get('https://api.openweathermap.org/data/2.5/forecast?q=' + location + '&appid=0327c3c2d2a39fbebaba8d1ec7813719&units=metric')
            .then(response => { console.log((response.data)); setForecastData(response.data) })

        
        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
    const getTemp = () => {
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=0327c3c2d2a39fbebaba8d1ec7813719&units=metric')
            .then(response => { console.log((response.data)); setWeatherData(response.data) })
        axios.get('https://api.openweathermap.org/data/2.5/forecast?q=' + location + '&appid=0327c3c2d2a39fbebaba8d1ec7813719&units=metric')
            .then(response => { console.log((response.data)); setForecastData(response.data) })

    }
    const handleSearch = (e) =>{
        setLocation(e.target.value)
    }
    return (
        <div className="container">
            <div className="sub-container">
                <div className="searchContainer">
                    <div className="search-box">
                        <input value={location} onChange={handleSearch} type="text" className="search-input" placeholder="Search location" />

                        <button onClick={getTemp} className="search-button">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </div>
                <div className="data-container">
                    <div className="left-data-container">
                        <div className="today-forecast">
                            <div className="main-label">Today's forecast for {location}</div>
                            <div className="inside-box">
                                <div className="temp-box">
                                    <div className="temperature curr-temp">current temperature: {weatherData && weatherData.main.temp} &#176;C</div>
                                    <div className="temperature weather-condition">weather condition: {weatherData && weatherData.weather[0].main}</div>
                                    <div className="temperature high-low-temp">heighest and lowest temp</div>
                                    <div className="temperature">{weatherData && weatherData.main.temp_min} &#176;C - {weatherData && weatherData.main.temp_max} &#176;C </div>
                                </div>
                                <div className="weather-icon">
                                    <i className="fas fa-cloud-sun"></i>
                                </div>
                            </div>
                        </div>
                        <div className="weekly-forecast">
                            <div className="main-label">Weekly forecast for {location}</div>
                            <div className="inside-box">
                                <div className="forecast-box">
                                    <listItems />
                                    {forecast && Object.keys(forecast.list).map(function (keyName, keyIndex) {
                                        return (
                                            <WeatherCard key={keyName} forecast={forecast.list[keyIndex]} />
                                        )
                                    })}
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="right-data-container">
                        <div className="weather-map"></div>
                        <div className="temp-converter">
                            <Converter />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
