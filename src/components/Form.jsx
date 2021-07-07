import React, { useState } from "react";

export default function Form() {
  const [userInfos, setUserInfos] = useState({
    email: "",
    password: "",
    about: "",
  });

  var HandleChange = (e) => {
      const {name, value} = e.currentTarget;
      
      setUserInfos((prev) => {
          if(name === "email"){
              return {
                email : value,
                about : prev.about,
                password : prev.password
              }
          } else if(name === "password") {
              return {
                  email : prev.email,
                  password : value,
                  about : prev.about
              }
          } else if(name === "about") {
              return {
                email : prev.email,
                password : prev.password,
                about : value
              }
          }
      })
  };

  return (
    <form>
      <label>Email</label>
      <input onChange={HandleChange} value={userInfos.email} type="email" name="email" />

      <label>Mot de passe</label>
      <input onChange={HandleChange} value={userInfos.password} type="password" name="password" />

      <label>A propos de vous</label>
      <input onChange={HandleChange} type="text" name="about" />

      <button type="submit">Envoyer</button>
    </form>
  );
}
