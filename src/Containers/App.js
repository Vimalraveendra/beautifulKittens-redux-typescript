import React from "react";
import "./App.css";
import SearchField from "../Components/SearchField/SearchField";
import KittensList from "../Components/KittensList/KittensList";

class App extends React.Component {
  state = {
    kittens: [],
    InputValue: ""
  };
  onSearchChange = event => {
    const newInput = event.target.value;
    console.log("event", newInput);
    this.setState({ InputValue: newInput });
  };
  render() {
    console.log("inputvalue", this.state.Inputvalue);
    return (
      <div className="App">
        <h1>Beautiful Kittens</h1>
        <SearchField searchChange={this.onSearchChange} />
        <KittensList />
      </div>
    );
  }
}

export default App;
