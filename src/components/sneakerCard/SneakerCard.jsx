import React from 'react';
import jordan from '../../assets/image5.jpg'
import plusLogo from '../../assets/plusLogo.svg'
import './SneakerCard.scss'

const SneakerCard = () => {
    return (
        <div className='cardWrapper'>
            <img src={jordan} className='itemPhoto' alt="ФотоТовара" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="priceBlock">
                <div className="priceInfo">
                    <span>Цена:</span>
                    <b>15000 руб.</b>
                </div>
                <img className='addToCartBtn' src={plusLogo} alt="Добавить" />
            </div>
        </div>
    );
};

export default SneakerCard;