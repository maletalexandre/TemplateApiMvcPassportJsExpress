import React from "react";

export default function Link({link , linkName}) {
  return (
    <div className="link__item">
      <a className="link" href={link}>{linkName}</a>
    </div>
  );
}
