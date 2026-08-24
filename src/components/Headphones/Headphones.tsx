import React, { useState } from 'react';
import '../Headphones/Headphones.css';

import Headphones1 from '../../assets/Headphones-1.png';
import Headphones2 from '../../assets/Headphones-2.png';
import Headphones3 from '../../assets/Headphones-3.png';
import HeartIcon from '../../assets/like_icon-3.png';

const Headphones = () => {
    const [likedProducts, setLikedProducts] = useState<number[]>([]);

    const productPhotos = [Headphones1, Headphones2, Headphones3];
    const productName = ["Apple BYZ S852I", "Apple EarPods", "Apple EarPods"];
    const productPrice = ["2927 ₸", "2327 ₸", "2327 ₸"];
    const productRating = [4.7, 4.5, 4.3];

    const products = Array.from({ length: 2 }).flatMap(() =>
        productPhotos.map((photo, index) => ({
            photo,
            name: productName[index],
            price: productPrice[index],
            rating: productRating[index],
        }))
    );

    const toggleLike = (index: number) => {
        setLikedProducts((prev) =>
            prev.includes(index)
                ? prev.filter((id) => id !== index)
                : [...prev, index]
        );
    };

    return (
        <div className="Headphones">
            <div className="Headphones-wrapper">
                <div className="container">

                    <h3 className="Headphones-title">
                        Наушники
                    </h3>

                    <div className="Headphones-wrap">

                        {products.map((product, index) => {
                            const isLiked = likedProducts.includes(index);

                            return (
                                <div
                                    className="Headphones-inner"
                                    key={index}
                                >

                                    <button
                                        type="button"
                                        className={`Headphones-like ${
                                            isLiked ? 'liked' : ''
                                        }`}
                                        onClick={() => toggleLike(index)}
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
                                            <span className="like-particles">
                                                ♥
                                            </span>
                                        )}
                                    </button>

                                    <img
                                        src={product.photo}
                                        alt={product.name}
                                        className="Headphones-img"
                                    />

                                    <div className="Headphones-block">
                                        <h5 className="Headphones-caption">
                                            {product.name}
                                        </h5>

                                        <span className="Headphones-price">
                                            {product.price}
                                        </span>
                                    </div>

                                    <div className="Headphones-rating">
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

export default Headphones;