import React, { createContext, useContext, useState } from 'react';

interface FavoritesContextType {
    likedProducts: number[];
    toggleLike: (id: number) => void;
}

const FavoritesContext = createContext<FavoritesContextType | null>(null);

export const FavoritesProvider = ({
      children,
  }: {
    children: React.ReactNode;
}) => {
    const [likedProducts, setLikedProducts] = useState<number[]>([]);

    const toggleLike = (id: number) => {
        setLikedProducts((prev) =>
            prev.includes(id)
                ? prev.filter((productId) => productId !== id)
                : [...prev, id]
        );
    };

    return (
        <FavoritesContext.Provider value={{ likedProducts, toggleLike }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => {
    const context = useContext(FavoritesContext);

    if (!context) {
        throw new Error('useFavorites must be used within FavoritesProvider');
    }

    return context;
};