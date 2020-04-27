import React from "react";
import "./App.scss";
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

  filterKittens = () => {
    return this.state.kittensArray.filter(kitten => {
      return kitten.name
        .toLowerCase()
        .includes(this.state.InputValue.toLocaleLowerCase());
    });
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
        <SearchField />
        <KittensList kittensArray={this.filterKittens()} />
      </div>
    );
  }
}

export default App;
