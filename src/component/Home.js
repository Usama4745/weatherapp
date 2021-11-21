import React from 'react';
import './Home.css'
import Search from './Search/Search';

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
            </div>
        </div>
    );
}

export default Home;
