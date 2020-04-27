import React from "react";
import "./App.scss";
import SearchField from "../Components/SearchField/SearchField";
import KittensList from "../Components/KittensList/KittensList";
import { connect } from "react-redux";
import { requestKittens } from "../Redux/Kittens/Kittens.actions";

class App extends React.Component {
  componentDidMount() {
    this.props.requestKittens();
  }
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

const mapDispatchToProps = dispatch => ({
  requestKittens: () => dispatch(requestKittens())
});
export default connect(null, mapDispatchToProps)(App);
