import React from "react";
import "./card.css"

export default function Card({ imgSource, link }) {
    var canMove = true;

    function HandleMouseMove(e){
        canMove = true;

        let X = Math.floor(e.clientX / 20);
        let Y = Math.floor(e.clientY / 50);

        const animText = document.getElementById('animText');

        animText.style.top = `${X}px`;
        animText.style.right = `${Y}px`;
        
    }


  return (
    <div className="card">
      <img src={imgSource} alt="" className="card__img" />
      <div onMouseMove={canMove && HandleMouseMove} onMouseLeave={canMove = false} className="card__link">
        <a href={link} id="animText" className="text">
          Read
        </a>
      </div>
    </div>
  );
}
