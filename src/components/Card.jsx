import React from "react";
import "./card.css";

export default function Card({ imgSource, link }) {
  var canMove = true;

  function HandleMouseMove(e) {
    console.log(e.currentTarget.style);
    let X = Math.floor(e.clientX / 30);
    let Y = Math.floor(e.clientY / 30);

    e.currentTarget.style.transform = `translateX(${X}px)`;
    e.currentTarget.style.transform = `translateY(${Y}px)`;
  }

  return (
    <div className="card">
      <img src={imgSource} alt="" className="card__img" />
      <div className="card__link">
        <a
          onMouseMove={canMove && HandleMouseMove}
          onMouseEnter={(canMove = true)}
          onMouseLeave={(canMove = false)}
          href={link}
          id="animText"
          className="text"
        >
          Read
        </a>
      </div>
    </div>
  );
}
