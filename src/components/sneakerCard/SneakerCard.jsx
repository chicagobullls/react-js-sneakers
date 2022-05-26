import React, { useState } from 'react';
import unfavorite from '../../assets/unfavorite.svg'
import favorite from '../../assets/isFavorite.svg'
import offPlusLogo from '../../assets/plusLogo.svg'
import onPlusLogo from '../../assets/onPlus.svg'

import './SneakerCard.scss'

const SneakerCard = ({ id, name, price, img }) => {
    const [isFavorite, setIsFavorite] = useState(false)
    const [isPlus, setIsPlus] = useState(false)

    const onClickFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    const onClickPlus = () => {
        setIsPlus(!isPlus);``
    };

    return (
        <div className='cardWrapper'>
            <div className="favoriteLogo" onClick={() => onClickFavorite()}>
                <img src={isFavorite ? favorite : unfavorite} alt="Не нравится" />
            </div>
            <img src={img} className='itemPhoto' alt="ФотоТовара" />
            <h5>{name}</h5>
            <div className="priceBlock">
                <div className="priceInfo">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <img onClick={() => onClickPlus()} className='addToCartBtn' src={isPlus ? onPlusLogo : offPlusLogo} alt="Добавить" />
            </div>
        </div>
    );
};

export default SneakerCard;