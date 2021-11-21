import React,{useState} from 'react';
import './Converter.css';

function Converter() {
    const [celsius, setCelsius] = useState();
    const [fareinheit, setfareinheit] = useState();

    
    const handleCelChange = (e) =>{
        setfareinheit((e.target.value*(9/5))+32) 
        setCelsius(e.target.value) 
    }
    const handleFarChange = (e) =>{
        setfareinheit(e.target.value)
        setCelsius((e.target.value-32)*(5/9))
    }
    return (
        <div>
            <h1>Temperature Converter</h1>
            <div className="converter-main">
                <input className="convert-input"
                    type="number"
                    value={fareinheit} onChange={handleFarChange}
                    id="fahrenheit" placeholder="Fahrenheit" name="f"/>
                <i className="fas fa-arrow-right"></i>
                <input type="number" value={celsius} onChange={handleCelChange} className="convert-input" id="celsius" placeholder="Celsius" name="c"/>
            </div>
        </div>
    );
}

export default Converter;
