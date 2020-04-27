import React from "react";
import Kittens from "../Kittens/Kittens";
import "./KittensList.scss";
import { connect } from "react-redux";

const KittensList = ({ kittensArray, inputValue }) => {
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

const mapStateToProps = ({
  kittensList: { kittensArray },
  searchInput: { inputValue }
}) => ({
  kittensArray,
  inputValue
});
export default connect(mapStateToProps)(KittensList);
