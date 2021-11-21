import React from 'react';
import './Home.css'
import Search from './Search/Search';
import Converter from './Converter/Converter';

function Home() {
    return (
        <div className="container">
            <div className="sub-container">
                <div className="searchContainer">
                    <div className="search-box">
                        <Search />

                        <button className="search-button">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </div>
                <div className="data-container">
                    <div className="left-data-container">
                        <div className="today-forecast">
                            <div className="main-label">Today's forecast for islamabad</div>
                            <div className="inside-box">
                                <div className="temp-box">
                                    <div className="temperature curr-temp">current temperature</div>
                                    <div className="temperature weather-condition">weather condition</div>
                                    <div className="temperature high-low-temp">heighest and lowest temp</div>
                                </div>
                                <div className="weather-icon">
                                    <i className="fas fa-cloud-sun"></i>
                                </div>
                            </div>
                        </div>
                        <div className="weekly-forecast">
                            <div className="main-label">Weekly forecast for islamabad</div>
                            <div className="inside-box">
                                <div className="temp-box">
                                    <div className="temperature curr-temp">current temperature</div>
                                    <div className="temperature weather-condition">weather condition</div>
                                    <div className="temperature high-low-temp">heighest and lowest temp</div>
                                </div>
                                <div className="weather-icon">
                                    <i className="fas fa-cloud-sun"></i>
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
