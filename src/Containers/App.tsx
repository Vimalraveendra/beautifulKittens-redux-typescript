import React from "react";
import "./App.scss";
import SearchField from "../Components/SearchField/SearchField";
import KittensList from "../Components/KittensList/KittensList";
import { connect } from "react-redux";
import { requestKittens } from "../Redux/Kittens/Kittens.actions";
import { KittensActionTypes } from "../Redux/Kittens/Kittens.types";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";

interface IAppProps {}
interface IAppState {}

// here we are doing aggregation of all the props  types.
type Props = IAppProps & LinkDispatchToProps;

class App extends React.Component<Props, IAppState> {
  componentDidMount(): void {
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

// here we need to specify the return type of  mapDispatchToProps.
interface LinkDispatchToProps {
  // here requesMonsters is a funtion that  not taking paramter &
  // it returns void, thats what bascially dispatch returns.
  requestKittens: () => void;
}
const mapDispatchToProps = (
  // normally we are using dispatch type, but here we are using thunk
  // so we are using ThunkDispatch.
  dispatch: ThunkDispatch<any, any, KittensActionTypes>
): LinkDispatchToProps => ({
  //bindActionCreators is when you want to pass some action creators
  // down to a component that isn't aware of Redux, and you don't want
  //to pass dispatch or the Redux store to it.
  requestKittens: bindActionCreators(requestKittens, dispatch)
});
export default connect(null, mapDispatchToProps)(App);
