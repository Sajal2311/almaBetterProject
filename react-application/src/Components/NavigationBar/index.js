import { Switch, Route, Link } from "react-router-dom";
import "./styles/index.css";
import Home from "../Home";
import { useState } from "react";
import MyFlashCard from "../MyFlashCard";
import FlashCardDetails from "../FlashCardDetails";

const NavigationBar = () => {
  const [currentTab, setCurrentTab] = useState("");
  const handleTabClick = (value) => {
    console.log(value, "value");
    setCurrentTab(value);
  };
  return (
    <>
      <div className="menu">
        <ul id="nav-list" className="navigation-list">
          <li key="Create">
            <Link
              to="/"
              onClick={() => handleTabClick("createFlashCard")}
              className={currentTab === "createFlashCard" ? "active" : ""}
            >
              Create Flash Card
            </Link>
          </li>
          <li key="MyFlashCard">
            <Link
              to="/my-flash-card"
              onClick={() => handleTabClick("myFlashCard")}
              className={currentTab === "myFlashCard" ? "active" : ""}
            >
              My Flash Card
            </Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/my-flash-card" exact>
          <MyFlashCard />
        </Route>
        <Route path="/my-flash-card/:name">
          <FlashCardDetails />
        </Route>
      </Switch>
    </>
  );
};

export default NavigationBar;

//  ul= unordered list, ol= ordered list
// li = list item
