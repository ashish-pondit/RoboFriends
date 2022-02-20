import React,{Component,useState,useEffect} from "react";
// import { robots } from "./robots";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import "tachyons";
import "./App.css";
import Scroll from "./components/Scroll.js";
import ErrorBoundary from "./components/ErrorBoundary";

function App () {
  // constructor() {
  //   super();
  //   this.state = { robots: [], searchFiled: "" };
  // }

  const [robots,setRobots] = useState([])
  const [searchField,setSearchField] = useState('')
  const [count,setCount] = useState(0)

  useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
      console.log(count)
  },[count])
  // componentDidMount() {
  //   // console.log("component did mount called");
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((users) => this.setState({ robots: users }));
  // }

  const onSearchChange = (event) => {
    // console.log(event.target.value);
    setSearchField(event.target.value)
  };

  
  const robotsResult = robots.filter((x) => {
    return x.name
      .toLowerCase()
      .includes(searchField.toLowerCase());
  });

  if (robots.length === 0) {
    return <h1>Loading</h1>;
  } else {
    return (
      <div className="tc">
        <h1 className="f2">Robo Friends Media</h1>
        {/* <button onClick={()=>setCount(count+1)}>click me {count}</button> */}
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={robotsResult} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }

}

export default App;
