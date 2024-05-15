import React, { useState } from "react";
import { v1 as uuid } from "uuid";
import axios from "axios";


const useFlip = () => {
    const [state, setState] = useState(true);
    const toggle = () => {
        setState(oldstate => !oldstate);
    }

    return [state, toggle];
}


const useAxios = (url) => {
    const [cards, setCards] = useState([]);

    const addCard = async () => {
        const response = await axios.get(url);
        setCards(cards => [...cards, { ...response.data, id: uuid() }]);
    };

    return [cards, addCard];
}


export { useFlip, useAxios };