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
    const [resource, setResource] = useState([]);

    const addCard = async (name) => {
        const response = name instanceof Object ? await axios.get(url): await axios.get(`${url}/${name}`);
        setResource(resource => [...resource, { ...response.data, id: uuid() }]);
    };

    return [resource, addCard];
}


export { useFlip, useAxios };