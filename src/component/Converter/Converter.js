import React from 'react';
import './Converter.css';

function Converter() {
    return (

        <div>
            <h1>Temperature Converter</h1>
            <input className="convert-input" type="text" id="fahrenheit" placeholder="Fahrenheit" name="f" value="" />
            <input className="convert-input" type="text" id="celsius" placeholder="Celsius" name="c" value="" />
        </div>
    );
}

export default Converter;
