import React from "react";
import "./Person.scss";
import { MdMailOutline } from "react-icons/md";

const Person = () => {
  return (
    <>
      <div className="person-container">
        <img
          src="https://pbs.twimg.com/profile_images/1634021833/50258_211053130451_5559002_n_400x400.jpg"
          alt="no-img"
        />
        <h4>Pera Zmikic</h4>
        <div className="mail">
          <MdMailOutline size="22px" />
          <span>pera.zmikic@gmail.com</span>
        </div>
      </div>
    </>
  );
};

export default Person;
