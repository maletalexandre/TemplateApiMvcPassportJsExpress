import React from "react";
import Card from "./Card";
import Infos from './info';
import "./main.css"

export default function Main() {
    var key = 0;
    const {images} = Infos;
  return (
    <main>
        {images.map(image => {
            return  <Card imgSource={image.source} key={++key} />
        })}
    </main>
  );
}
