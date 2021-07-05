import React from "react";
import Link from "./Link";

export default function Nav() {
  return (
    <nav>
      <div>
        <h1 className="nav__title">-DXS+</h1>
      </div>

      <div className="link__container">
        <Link link="#" linkName="Work" />
        <Link link="#" linkName="Blog" />

        <Link link="#" linkName="Register" />
        <Link link="#" linkName="Login" />
      </div>
    </nav>
  );
}
