import React, { useEffect, useState } from 'react';
import Slider from '../../components/slider/Slider';
import searchLogo from '../../assets/SearchLogo.svg'
import './Main.scss'
import SneakerCard from '../../components/sneakerCard/SneakerCard';
import Cart from '../../components/cart/Cart';
import axios from 'axios';

const Main = () => {
    const [sneakers, setSneakers] = useState()
    useEffect(() => {
        axios.get(`http://localhost:3000/sneakers`)
            .then((resp) => {
                const allSneakers = resp.data;
                setSneakers(allSneakers);
            });

    }, []);
    console.log(setSneakers)

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
                    {sneakers?.map((data, index) => {
                        return <SneakerCard key={index} id={data.id} name={data.name} price={data.price} img={data.img} />
                    })}
                </div>
                <Cart />
            </div>

        </div>
    );
};

export default Main;