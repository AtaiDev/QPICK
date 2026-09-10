import React from 'react';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import CasesPage from "./components/CasesPage/CasesPage";
import Headphones from "./components/Headphones/Headphones";
import {FavoritesProvider} from "./context/FavoritesContext";
import HeadphonesBottom from "./components/HeadphonesBottom/HeadphonesBottom";
import Footer from "./components/Footer/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
        <FavoritesProvider>
            <Header />
            <Main />
            <CasesPage />
            <Headphones />
            <HeadphonesBottom />
            <Footer />
        </FavoritesProvider>
    </div>
  );
}

export default App;
