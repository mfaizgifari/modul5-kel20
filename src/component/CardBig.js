import { AiFillStar } from "react-icons/ai";
import "./CardBig.css";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function CardBig(props) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    // Replace '/movie/:id' with the actual URL path for the movie details page.
    navigate(`/detail/${props.id}`);
  };
  return (
    <div className="containerBig" href="detail.js">
      <img src={props.img} alt="" className="posterBig" />
      <div className="descriptionBig">
        <div>
          <p id="title">{props.title}</p>
          <p id="genre">{props.genre}</p>
        </div>
        <div>
          <AiFillStar color={props.color} size={props.size} />{" "}
          <AiFillStar color={props.color} size={props.size} />{" "}
          <AiFillStar color={props.color} size={props.size} />{" "}
          <AiFillStar color={props.color} size={props.size} />{" "}
          <AiFillStar color={props.color} size={props.size} />{" "}
        </div>
      </div>
    </div>
  );
}
