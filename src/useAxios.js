import React, { useState } from 'react';
import uuid from "uuid";
import axios from "axios";

const useAxiosState = (url) => {
  const [card, setCard] = useState([]);
  
  const addCard = async (pokeName) => {
    const pokemonName = typeof pokeName === "string" ? `${url}${pokeName}` : url
    const response = await axios.get(pokemonName);
    
    setCard(card => [...card, { ...response.data, id: uuid()}]);
  }
  return [card, addCard]
}

export default useAxiosState;
