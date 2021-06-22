import React from "react";
import "./Home.scss";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import People from "../../components/People/People";
const Home = () => {
  return (
    <div>
      <Header />
      <Search />
      <People />
    </div>
  );
};

export default Home;
