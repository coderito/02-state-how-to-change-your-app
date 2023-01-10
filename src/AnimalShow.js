import "./AnimalShow.css";
import React, { useState } from "react";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

export const AnimalShow = ({ type }) => {
  const [clicks, setClicks] = useState(0);
  const [message, setMessage] = useState(false);

  const handleClick = () => {
    if (clicks === 8) {
      setClicks(0);
      setMessage(true);
      return
    }
    setClicks(clicks + 1);
  };

  const messageAnimal = (
    <div>
      <hr />
      <p className="animal-message">You love this animal!</p>
    </div>
  );

  const messageAnimalNot = (
    <div>
      <hr />
      <p className="animal-message">You don't love this animal!</p>
    </div>
  );

  return (
    <div class="animal-show" onClick={handleClick}>
      <img className="animal" alt="animal" src={svgMap[type]} />
      <img
        className="heart"
        alt="heart"
        src={heart}
        style={{ width: 10 + 10 * clicks }}
      />
      {message ? messageAnimal : messageAnimalNot}
    </div>
  );
};
