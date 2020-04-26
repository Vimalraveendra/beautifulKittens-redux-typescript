import React from "react";
import "./App.css";
import SearchField from "../Components/SearchField/SearchField";
import KittensList from "../Components/KittensList/KittensList";

class App extends React.Component {
  state = {
    kittens: [],
    InputValue: ""
  };
  render() {
    return (
      <div className="App">
        <h1>Beautiful Kittens</h1>
        <SearchField />
        <KittensList />
      </div>
    );
  }
}

export default App;
