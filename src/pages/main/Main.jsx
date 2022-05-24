import React from 'react';
import Slider from '../../components/slider/Slider';
import searchLogo from '../../assets/SearchLogo.svg'
import './Main.scss'
import SneakerCard from '../../components/sneakerCard/SneakerCard';

const Main = () => {
    const sus = 8 & 4;

    console.log(sus)
    return (
        <div className='mainWrapper'>
            <div className="mainContainer">
                <div className="main__sliderBlock"><Slider /></div>

                <div className="main__titleBlock">
                    <h2>Все кроссовки</h2>
                    <div className="main__search-block">
                        <img className='searchLogo' src={searchLogo} alt="поиск" />
                        <input type="text" placeholder='Поиск...' />
                    </div>
                </div>

                <div className="main__sneakers-block">
                    <SneakerCard />
                    <SneakerCard />
                    <SneakerCard />
                    <SneakerCard />
                    <SneakerCard />
                </div>
            </div>

        </div>
    );
};

export default Main;