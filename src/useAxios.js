import React, { useState } from 'react';
import uuid from "uuid";
import axios from "axios";

const useAxiosState = (url) => {
  const [card, setCard] = useState([]);
  
  const addCard = async () => {
    const response = await axios.get(url);
    setCard(card => [...card, { ...response.data, id: uuid() }]);
  }
  return [card, addCard]
}

export default useAxiosState;
