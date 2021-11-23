import React, { useEffect, useState } from 'react';
import './Home.css'
import Converter from './Converter/Converter';
import WeatherCard from './WeatherCard/WeatherCard';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
    const [weatherData, setWeatherData] = useState();
    const [forecast, setForecastData] = useState();
    const [location, setLocation] = useState("islamabad");
    useEffect(() => {
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid='+process.env.REACT_APP_APP_TOKEN+'&units=metric')
            .then(response => { console.log((response.data)); setWeatherData(response.data) })
        axios.get('//api.openweathermap.org/data/2.5/forecast?q=' + location + '&appid='+process.env.REACT_APP_APP_TOKEN+'&units=metric')
            .then(response => { console.log((response.data)); setForecastData(response.data) }).catch(function (error) {
                console.log(error);
            })
        
    },);
    const getTemp = () => {
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid='+process.env.REACT_APP_APP_TOKEN+'&units=metric')
            .then(response => { setWeatherData(response.data) })
        axios.get('https://api.openweathermap.org/data/2.5/forecast?q=' + location + '&appid='+process.env.REACT_APP_FORECAST_TOKEN+'&units=metric')
            .then(response => { setForecastData(response.data) }).catch(function (error) {
                toast("Please add correct location");
            })
            //when user will search using zipcode
        axios.get('https://api.openweathermap.org/data/2.5/weather?zip=' + location + ',pk&appid='+process.env.REACT_APP_APP_TOKEN+'&units=metric')
            .then(response => { setWeatherData(response.data) })
        axios.get('https://api.openweathermap.org/data/2.5/forecast?zip=' + location + ',pk&appid='+process.env.REACT_APP_FORECAST_TOKEN+'&units=metric')
            .then(response => { setForecastData(response.data) }).catch(function (error) {
            })
            if(!weatherData){
                toast("Please add correct location");
            }

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
                            <div className="main-label">Today's forecast for {weatherData && weatherData.name}</div>
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
                            <div className="main-label">Weekly forecast for {weatherData && weatherData.name}</div>
                            <div className="inside-box">
                                <div className="forecast-box">
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
            <ToastContainer />
        </div>
    );
}

export default Home;
