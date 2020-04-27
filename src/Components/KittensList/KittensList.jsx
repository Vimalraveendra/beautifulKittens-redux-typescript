import React from "react";
import Kittens from "../Kittens/Kittens";
import "./KittensList.scss";
import { connect } from "react-redux";

const KittensList = ({ kittensArray }) => {
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

const mapStateToProps = ({ kittensArray: { kittensArray } }) => ({
  kittensArray
});
export default connect(mapStateToProps)(KittensList);
