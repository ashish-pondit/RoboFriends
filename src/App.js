import React from "react";
import { robots } from "./robots";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import "tachyons";

// const App = () => {
//   return (
//     <div className="tc">
//       <h1 className="f1">Robo Friends Media</h1>
//       <SearchBox />
//       <CardList robots={robots} />
//     </div>
//   );
// };

class App extends React.Component {
  constructor() {
    super();
    this.state = { robots: robots, searchFiled: "" };
  }

  OnsearchChange = (event) => {
    console.log(event.target.value);
    this.setState({ searchFiled: event.target.value });
  };

  render() {
    const robotsResult = this.state.robots.filter((x) => {
      return x.name
        .toLowerCase()
        .includes(this.state.searchFiled.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">Robo Friends Media</h1>
        <SearchBox searchChange={this.OnsearchChange} />
        <CardList robots={robotsResult} />
      </div>
    );
  }
}

export default App;
