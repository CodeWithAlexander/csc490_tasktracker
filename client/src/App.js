import React from "react";
import { Content } from "./components/content.component";
import Navbar from "./components/navbar.component";
import { BrowserRouter as Router, Route } from "react-router-dom";
import User from "./components/user.component";

function App() {


  return (

    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={User} />
        <Route path="/:_id" exact component={Content}/>
      </div>
    </Router>

  );
}

export default App;

