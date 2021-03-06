import React from "react";
// import { robots } from "./robots";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import "tachyons";
import "./App.css";
import Scroll from "./components/Scroll.js";
import ErrorBoundary from "./components/ErrorBoundary";

class App extends React.Component {
  constructor() {
    super();
    this.state = { robots: [], searchFiled: "" };
  }

  componentDidMount() {
    // console.log("component did mount called");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  OnsearchChange = (event) => {
    // console.log(event.target.value);
    this.setState({ searchFiled: event.target.value });
  };

  render() {
    const robotsResult = this.state.robots.filter((x) => {
      return x.name
        .toLowerCase()
        .includes(this.state.searchFiled.toLowerCase());
    });

    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f2">Robo Friends Media</h1>
          <SearchBox searchChange={this.OnsearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={robotsResult} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
