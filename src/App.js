import './App.css'
import React, { useState } from "react";
import { AnimalShow } from "./AnimalShow";

export const App = () => {
  const [animals, setAnimals] = useState([]);

  function getRandomAnimals() {
    const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
    const oneAnimal = Math.floor(Math.random() * animals.length);
    return animals[oneAnimal];
  }


  const handleClick = () => {
    setAnimals([...animals, getRandomAnimals()]);
  };

  const renderedAnimals = animals.map((animal, index) => (
    <AnimalShow type={animal} key={index} />
  ));

  return (
    <div className='app'>
      <button onClick={handleClick}>Add Animal</button>
      <div className='animal-list'>{renderedAnimals}</div>
    </div>
  );
};
