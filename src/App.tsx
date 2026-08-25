import React from 'react';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import CasesPage from "./components/CasesPage/CasesPage";
import Headphones from "./components/Headphones/Headphones";
import {FavoritesProvider} from "./context/FavoritesContext";
import './App.css';

function App() {
  return (
    <div className="App">
        <FavoritesProvider>
            <Header />
            <Main />
            <CasesPage />
            <Headphones />
        </FavoritesProvider>
    </div>
  );
}

export default App;
