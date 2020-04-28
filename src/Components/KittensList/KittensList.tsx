import React from "react";
import Kittens from "../Kittens/Kittens";
import "./KittensList.scss";
import { connect } from "react-redux";
import { IKittens } from "../../Redux/Kittens/Kittens.types";
import { AppState } from "../../Redux/store";

interface KittensListProps {}
//here we are doing aggregation of all the props  types.
type Props = KittensListProps & LinkStateProps;

const KittensList: React.FC<Props> = ({ kittensArray, inputValue }) => {
  kittensArray = kittensArray.filter(kitten => {
    return kitten.name.toLowerCase().includes(inputValue.toLocaleLowerCase());
  });

  return (
    <div className="kittens-list">
      {kittensArray.map(kitten => (
        <Kittens
          key={kitten.id}
          id={kitten.id}
          name={kitten.name}
          phone={kitten.phone}
          email={kitten.email}
          website={kitten.website}
        />
      ))}
    </div>
  );
};

// here we need to specify the return type of  mapStateToProps.
interface LinkStateProps {
  kittensArray: Array<IKittens>;
  inputValue: string;
}

// here we are going to specify the  type for parameter state & return
// type of mapStateToProps.
const mapStateToProps = (state: AppState): LinkStateProps => ({
  kittensArray: state.kittensList.kittensArray,
  inputValue: state.searchInput.inputValue
});
export default connect(mapStateToProps)(KittensList);
