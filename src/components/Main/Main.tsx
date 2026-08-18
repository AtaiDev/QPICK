import React from 'react';
import iPhoneImage from "../../assets/iPhone-13-Pro-Max.png"
import '../Main/Main.css'

const Main = () => {
    return (
        <div className="Main">
            <div className="container">
                <div className="Main_wrapper">
                    <div className="Main_inner">
                        <h2 className="Main_title">Аксессуары для Iphone 13 Pro Max</h2>
                    </div>
                    <div className="Main_inner">
                        <img src={iPhoneImage} alt="Phone-image" className="Main_images" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;