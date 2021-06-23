import "./App.scss";
import Home from "../pages/Home/Home";
import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Candidate from "../pages/Candidate/Candidate";
import Login from "../pages/Login/Login";
import { getCandidates } from "../fetch/fetch";

function App() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    getCandidates().then((data) => {
      setCandidates(data);
    });
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home candidates={candidates} />
        </Route>
        <Route path="/candidate/:id">
          <Candidate candidates={candidates} />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
