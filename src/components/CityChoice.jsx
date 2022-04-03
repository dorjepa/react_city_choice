import React, {useState, useMemo, useEffect, useRef} from 'react';
// import React, {useMemo} from 'react';
import axios from "axios";
import MyInput from "./UI/input/MyInput";
import './../styles/CityChoice.css';
import CitiesList from "./CitiesList";


const CityChoice = () => {

    const [searchQuery, setSearchQuery] = useState('')

    const getCity = (choiceCity) => {
        setSearchQuery(choiceCity)
    }

    useEffect( () => {
        setSearchQuery(searchQuery)
    }, [getCity])

    return (

        <div className={"cityChoice"}>
            <h1>Выбор города</h1>
            <div className={"cityChoice__content"}>

                <div className={"cityChoice__input"}>
                    <MyInput
                        value={searchQuery}
                        onChange={e => {
                            setSearchQuery(e.target.value);
                        }}
                        placeholder="Город"
                    />
                </div>

                <CitiesList
                    searchQuery={{searchQuery}}
                    city={getCity}
                />

            </div>

        </div>
    );
};

export default CityChoice;