import React from 'react';
import './Header.scss'
import mainLogo from '../../assets/mainLogo2.svg'
import cartLogo from '../../assets/cartLogo.svg'
import favoriteLogo from '../../assets/favoriteLogo.svg'
import loginLogo from '../../assets/loginLogo.svg'


const Header = () => {
    return (
        < div className='header' >
            <div className="header__wrapper">
                <div className="headerLeft">
                    <img className='mainLogo' src={mainLogo} alt="Главное лого" />
                    <div className="headerLeft__info">
                        <h1>SAIREX SNEAKERS</h1>
                        <p>Лучший магазин кроссовок</p>
                    </div>
                </div>
                <div className="headerRight">
                    <div className="headerRight__cart">
                        <img src={cartLogo} alt="Корзина" />
                        <p>1250р</p>
                    </div>
                    <img src={favoriteLogo} alt="Избранное" />
                    <img src={loginLogo} alt="Профиль" />
                </div>
            </div>
        </div >
    );
};

export default Header;