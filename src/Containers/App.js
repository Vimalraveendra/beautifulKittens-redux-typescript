import React from "react";
import "./App.css";
import SearchField from "../Components/SearchField/SearchField";
import KittensList from "../Components/KittensList/KittensList";

class App extends React.Component {
  state = {
    kittensArray: [],
    InputValue: ""
  };
  onSearchChange = event => {
    const newInput = event.target.value;
    console.log("event", newInput);
    this.setState({ InputValue: newInput });
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users =>
        this.setState({
          kittensArray: users
        })
      );
  }
  render() {
    console.log("inputvalue", this.state.Inputvalue);
    console.log("kittens", this.state.kittensArray);
    return (
      <div className="App">
        <h1>Beautiful Kittens</h1>
        <SearchField searchChange={this.onSearchChange} />
        <KittensList kittensArray={this.state.kittensArray} />
      </div>
    );
  }
}

export default App;
