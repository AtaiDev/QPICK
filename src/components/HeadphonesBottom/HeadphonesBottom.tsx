import React from 'react';
import Headphones4 from '../../assets/Headphones-4.png';
import Headphones5 from '../../assets/Headphones-5.png';
import Headphones6 from '../../assets/Headphones-6.png';
import HeartIcon from '../../assets/like_icon-3.png';
import '../HeadphonesBottom/HeadphonesBottom.css';

import { useFavorites } from '../../context/FavoritesContext';

const productPhotos = [Headphones4, Headphones5, Headphones6];
const productName = ['Apple AirPods', 'GERLAX GH-04', 'BOROFONE BO4'];
const productPrice = ['9527 ₸', '6527 KZT', '7527 KZT'];
const productRatings = [4.7, 4.8, 4.9];

const products = productPhotos.map((photo, index) => ({
    id: index + 7,
    photo,
    name: productName[index],
    price: productPrice[index],
    rating: productRatings[index],
}));

const HeadphonesBottom = () => {
    const { likedProducts, toggleLike } = useFavorites();

    return (
        <div className="HeadphonesBottom">
            <div className="HeadphonesBottom-wrapper">
                <div className="container">
                    <h3 className="HeadphonesBottom-title">
                        Беспроводные наушники
                    </h3>

                    <div className="HeadphonesBottom-wrap">
                        {products.map((product) => {
                            const isLiked =
                                likedProducts.includes(product.id);

                            return (
                                <div
                                    className="HeadphonesBottom-inner"
                                    key={product.id}
                                >
                                    <button
                                        type="button"
                                        className={`HeadphonesBottom-like ${
                                            isLiked ? 'liked' : ''
                                        }`}
                                        onClick={() =>
                                            toggleLike(product.id)
                                        }
                                        aria-label={
                                            isLiked
                                                ? 'Убрать из избранного'
                                                : 'Добавить в избранное'
                                        }
                                    >
                                        <img
                                            src={HeartIcon}
                                            alt=""
                                        />

                                        {isLiked && (
                                            <span className="HeadphonesBottom-like-particles">
                                                ♥
                                            </span>
                                        )}
                                    </button>

                                    <img
                                        src={product.photo}
                                        alt={product.name}
                                        className="HeadphonesBottom-img"
                                    />

                                    <div className="HeadphonesBottom-block">
                                        <h5 className="HeadphonesBottom-caption">
                                            {product.name}
                                        </h5>

                                        <span className="HeadphonesBottom-price">
                                            {product.price}
                                        </span>
                                    </div>

                                    <div className="HeadphonesBottom-rating">
                                        {product.rating}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeadphonesBottom;