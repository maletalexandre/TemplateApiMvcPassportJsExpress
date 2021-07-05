import React from "react";
import "./card.css"

export default function Card({ imgSource, link }) {
    var canMove = true;

    function HandleMouseMove(e){

        let X = Math.floor(e.clientX / 20);
        let Y = Math.floor(e.clientY / 2);

        const texts = document.querySelectorAll('.text');

        for(let i = 0 ; i <texts.length ; i++){
            texts[i].style.transform = `translateX(${X}px)`;
            texts[i].style.transform = `translateY(${Y}px)`;
        }
         
     
    }


  return (
    <div className="card">
      <img src={imgSource} alt="" className="card__img" />
      <div onMouseMove={canMove && HandleMouseMove} onMouseEnter={canMove = true} onMouseLeave={canMove = false} className="card__link">
      <a href={link} id="animText" className="text">
          Read
        </a>
      </div>
    </div>
  );
}
