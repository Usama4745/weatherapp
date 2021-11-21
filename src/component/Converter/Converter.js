import React,{useState} from 'react';
import './Converter.css';

function Converter() {
    const [celsius, setCelsius] = useState(0);
    const [fareinheit, setfareinheit] = useState(0);

    const handleChange = e =>
    e.target.name === "f"
        ? setCelsius(e.target.value) 
        : e.target.name === "c"
        ? setfareinheit((e.target.value*(9/5))+32) 
        : "";
    return (
        <div>
            <h1>Temperature Converter</h1>
            <div className="converter-main">
                <input className="convert-input"
                    type="number"
                    value={celsius}
                    id="fahrenheit" placeholder="Fahrenheit" name="f"/>
                <i className="fas fa-arrow-right"></i>
                <input type="number" value={celsius} className="convert-input" id="celsius" placeholder="Celsius" name="c"/>
            </div>
        </div>
    );
}

export default Converter;
