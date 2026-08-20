import React from 'react';
import '../../components/CasesPage/CasesPage.css'
import Glass from '../../assets/Glass.png';
import Silicone from '../../assets/Silicone.png';
import Leather from '../../assets/Leather.png';

const CasesPage = () => {
    const imageCase = [Glass, Silicone, Leather];
    const nameCase = ["Стеклянные", "Силиконовые", "Кожаные"];

    return (
        <div className="CasesPage">
            <div className="CasesPage-wrapper">
                <div className="container">
                    <h3 className="CasesPage-title">Чехлы</h3>
                    <div className="CasesPage-inner">
                        {imageCase.map((image, index) => (
                            <div className="CasesPage-cards" key={index}>
                                <img
                                    src={image}
                                    alt={nameCase[index]}
                                    className="CasesPage-img"
                                />
                                <p className="CasesPage-name">
                                    {nameCase[index]}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CasesPage;