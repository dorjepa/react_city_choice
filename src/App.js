import React, {useRef, useState} from 'react';
import './styles/App.css';
import MyInput from "./components/UI/input/MyInput";
import axios from 'axios';
import CityChoice from "./components/CityChoice";

function App() {

    return (
    <div className="App">

        <CityChoice/>

    </div>
  );
}

export default App;
