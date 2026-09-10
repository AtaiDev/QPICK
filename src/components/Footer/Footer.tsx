import React from 'react';
import VK from "../../assets/VK.png";
import Instagram from "../../assets/Instagram.png";
import Telegram from "../../assets/Telegram.png";
import Whatsapp from "../../assets/Whatsapp.png";
import "../Footer/Footer.css";
const Footer = () => {
    const navList = ["Избранное", "Корзина", "Контакты"];
    const translation = ["Каз", "Рус", "Eng"];
    const iconList = [VK, Instagram, Telegram, Whatsapp];

    return (
        <footer className="Footer">
            <div className="Footer-wrapper">
                <div className="container">
                    <div className="Footer-wrap">

                        <h1 className="Footer-logo">QPICK</h1>

                        <div className="Footer-nav">
                            {navList.map((item) => (
                                <a href="#" key={item}>
                                    {item}
                                </a>
                            ))}
                        </div>

                        <div className="Footer-info">
                            <p className="Footer-terms">
                                Условия сервиса
                            </p>

                            <div className="Footer-languages">
                                <span className="Footer-language-icon"></span>

                                {translation.map((item, index) => (
                                    <button
                                        key={item}
                                        className={index === 1 ? "active" : ""}
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="Footer-socials">
                            {iconList.map((icon, index) => (
                                <a href="#" key={index}>
                                    <img src={icon} alt="" />
                                </a>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;