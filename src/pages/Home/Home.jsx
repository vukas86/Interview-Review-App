import React, {useEffect, useState} from "react";
import "./Home.scss";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import { MdSearch } from "react-icons/md";

const Home = ({ candidates }) => {
  const [search, setSearch] = useState("");
  const [filteredCand, setFilteredCand] = useState([]);


 useEffect(() =>{

  const filtered = candidates.filter((e) => e.name.toLowerCase().includes(search.toLowerCase()))
  setFilteredCand(filtered);
  console.log(filteredCand)

 },[search])



  const searchInput = (s) => {
    setSearch(s);
  }
  return (
    <div>
      <Header />
      <div>
        <div className="search-div">
          <input
            type="search"
            name="search"
            id="home-search"
            placeholder="Search here..."
            onChange={(e) => searchInput(e.currentTarget.value)}
          />
          <button id="home-search-button">
            <MdSearch size="24px" />
          </button>
        </div>
      </div>
      <section id="wrapper-section">
        <div id="people-container">
        {filteredCand.map((e) =>(
          <Card candidates={candidates} />
           ) )}
        </div>
      </section>
    </div>
  );
};

export default Home;
