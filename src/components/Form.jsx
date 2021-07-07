import React, { useState } from "react";

export default function Form() {
  const [userInfos, setUserInfos] = useState({
    email: "",
    password: "",
    about: "",
  });

  var HandleChange = (e) => {
    const { name, value } = e.currentTarget;

    setUserInfos((prev) => ({...prev, [name]: value}));
  };

  return (
    <div>
      <form>
        <label>Email</label>
        <input
          onChange={HandleChange}
          value={userInfos.email}
          type="email"
          name="email"
        />

        <label>Mot de passe</label>
        <input
          onChange={HandleChange}
          value={userInfos.password}
          type="password"
          name="password"
        />

        <label>A propos de vous</label>
        <input onChange={HandleChange} value={userInfos.about} type="text" name="about" />

        <button type="submit">Envoyer</button>
      </form>

      <p>{userInfos.email}</p>
      <p>{userInfos.password}</p>
      <p>{userInfos.about}</p>
    </div>
  );
}
