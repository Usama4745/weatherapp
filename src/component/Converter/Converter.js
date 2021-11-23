import React, { useState } from 'react';
import './Converter.css';

function Converter() {
    const [celsius, setCelsius] = useState();
    const [fareinheit, setfareinheit] = useState();


    const handleCelChange = (e) => {
        if (e.target.value === '') {
            setCelsius('');
            setfareinheit('');
        }
        else {
            setfareinheit((e.target.value * (9 / 5)) + 32)
            setCelsius(e.target.value)
        }
    }
    const handleFarChange = (e) => {
        if (e.target.value === '') {
            setCelsius('');
            setfareinheit('');
        } else {
            setfareinheit(e.target.value)
            setCelsius((e.target.value - 32) * (5 / 9))
        }
    }
    return (
        <div>
            <h1>Temperature Converter</h1>
            <div className="converter-main">
                <div className="farenheit-div">
                    <label>Farenheit</label>
                    <input className="convert-input"
                        type="number"
                        value={fareinheit} onChange={handleFarChange}
                        id="fahrenheit" placeholder="Fahrenheit" name="f" />
                </div>
                <i className="fas fa-arrow-right"></i>
                <div className="celsius-div">
                    <label>Celsius</label>
                    <input type="number" value={celsius} onChange={handleCelChange} className="convert-input" id="celsius" placeholder="Celsius" name="c" />
                </div>
            </div>
        </div>
    );
}

export default Converter;
