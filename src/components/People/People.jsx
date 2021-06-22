import React from "react";
import "./People.scss";
import Person from "../Person/Person";

const People = () => {
  return (
    <section id="wrapper-section">
      <h1>Candidates</h1>

      <div id="people-container">
        <Person />
      </div>
    </section>
  );
};

export default People;
