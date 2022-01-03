import React from "react";
import { robots } from "./robots";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import "tachyons";

const App = () => {
  return (
    <div className="tc">
      <h1 className="f1">Robo Friends Media</h1>
      <SearchBox />
      <CardList robots={robots} />
    </div>
  );
};

export default App;
