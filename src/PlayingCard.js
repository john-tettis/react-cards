import React from "react";
import backOfCard from "./back.png";
import useFlip from './hooks.js'
import "./PlayingCard.css"

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [isFlipped, flip] = useFlip()
  return (
    <img
      src={!isFlipped ? front : back}
      alt="playing card"
      onClick={flip}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
