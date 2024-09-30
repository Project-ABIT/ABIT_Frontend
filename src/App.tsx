import React from 'react';
import {BrowserRouter} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import MenuBar from "./components/MenuBar";
import HomePage from "./pages/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <MenuBar />
        <HomePage />
      </BrowserRouter>
    </div>
  );
}

export default App;
