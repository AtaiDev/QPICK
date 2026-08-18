import React, { useState } from "react";
import "../Header/Header.css";
import ArrowIcon from "../../assets/Arrow_icon.png";

const Header = () => {
    const phoneModels: Record<string, string[]> = {
        Apple: [
            "iPhone 12",
            "iPhone 12 Max",
            "iPhone 13",
            "iPhone 13 Max",
            "iPhone 13 Pro Max",
            "iPhone 14",
        ],
        INOI: [
            "INOI A22 Lite",
            "INOI A25",
            "INOI A35",
            "INOI A72",
            "INOI Note 13",
        ],
        Nokia: [
            "Nokia 105",
            "Nokia 110",
            "Nokia 2660 Flip",
            "Nokia C22",
            "Nokia C32",
            "Nokia G22",
            "Nokia G42",
        ],
        Oppo: [
            "OPPO A38",
            "OPPO A58",
            "OPPO A78",
            "OPPO A79",
            "OPPO Reno 11",
            "OPPO Reno 12",
        ],
        Xiaomi: [
            "Redmi Note 12",
            "Redmi Note 13",
            "Redmi Note 13 Pro",
            "Redmi Note 14",
            "Xiaomi 13",
            "Xiaomi 14",
        ],
        Realme: [
            "Realme C53",
            "Realme C55",
            "Realme C67",
            "Realme 10",
            "Realme 11",
        ],
        Samsung: [
            "Galaxy A14",
            "Galaxy A15",
            "Galaxy A24",
            "Galaxy A25",
            "Galaxy A34",
            "Galaxy A35",
            "Galaxy A54",
            "Galaxy S23",
            "Galaxy S24",
            "Galaxy S25",
        ],
        Sony: [
            "Xperia 10 IV",
            "Xperia 10 V",
            "Xperia 10 VI",
            "Xperia 1 IV",
            "Xperia 1 V",
            "Xperia 1 VI",
        ],
        Vivo: [
            "Vivo Y16",
            "Vivo Y22",
            "Vivo Y27",
            "Vivo Y36",
            "Vivo V25",
            "Vivo V29",
        ],
    };

    const [isOpen, setIsOpen] = useState(false);
    const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
    const [selectedModel, setSelectedModel] = useState<string | null>(null);

    const handleBrandClick = (brand: string) => {
        setSelectedBrand(selectedBrand === brand ? null : brand);
    };

    const handleModelClick = (model: string) => {
        setSelectedModel(model);
    };

    const handleDropdownClick = () => {
        setIsOpen((prev) => !prev);

        if (isOpen) {
            setSelectedBrand(null);
        }
    };

    return (
        <div className="Header">
            <div className="container">
                <div className="Header_wrapper">
                    <div className="Header_inner">
                        <h1 className="Header_logo">
                            QPICK
                        </h1>

                        <div className="Header_dropdown">
                            <button
                                className="Header_button"
                                onClick={handleDropdownClick}
                            >
                                <span>Выбрать модель телефона</span>

                                <img
                                    className={`Header_button_arrow ${
                                        isOpen ? "active" : ""
                                    }`}
                                    src={ArrowIcon}
                                    alt=""
                                />
                            </button>

                            {isOpen && (
                                <div className="Header_menu">
                                    {Object.entries(phoneModels).map(
                                        ([brand, models]) => (
                                            <div
                                                className="Header_group"
                                                key={brand}
                                            >
                                                <button
                                                    className="Header_item"
                                                    onClick={() =>
                                                        handleBrandClick(brand)
                                                    }
                                                >
                                                    <span>{brand}</span>

                                                    <img
                                                        className={`Header_item_arrow ${
                                                            selectedBrand === brand
                                                                ? "active"
                                                                : ""
                                                        }`}
                                                        src={ArrowIcon}
                                                        alt=""
                                                    />
                                                </button>

                                                {selectedBrand === brand && (
                                                    <div className="Header_models">
                                                        {models.map((model) => (
                                                            <button
                                                                className={`Header_model ${
                                                                    selectedModel === model
                                                                        ? "active"
                                                                        : ""
                                                                }`}
                                                                key={model}
                                                                onClick={() =>
                                                                    handleModelClick(
                                                                        model
                                                                    )
                                                                }
                                                            >
                                                                {model}
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        )
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="Header_inner">
                        <button className="Header_heart">
                            <span className="Header_span">2</span>
                        </button>
                        <button className="Header_basket">
                            <span className="Header_span">1</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;