import React from 'react';
import Slider from '../../components/slider/Slider';
import './Main.scss'

const Main = () => {
    return (
        <div className='mainWrapper'>
            <div className="mainContainer">
                <div className="sliderBlock"><Slider /></div>
                <div className="titleBlock">
                    <h2>Все кросовки</h2>
                    <input type="text" placeholder='Поиск...' />
                </div>
            </div>

        </div>
    );
};

export default Main;