import React from 'react';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import CasesPage from "./components/CasesPage/CasesPage";
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <Main />
        <CasesPage />
    </div>
  );
}

export default App;
