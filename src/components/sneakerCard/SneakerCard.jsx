import React from 'react';
import jordan from '../../assets/image5.jpg'
import plusLogo from '../../assets/plusLogo.svg'
import './SneakerCard.scss'

const SneakerCard = ({ id, name, price, img }) => {
    return (
        <div className='cardWrapper'>
            <img src={img} className='itemPhoto' alt="ФотоТовара" />
            <h5>{name}</h5>
            <div className="priceBlock">
                <div className="priceInfo">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <img className='addToCartBtn' src={plusLogo} alt="Добавить" />
            </div>
        </div>
    );
};

export default SneakerCard;