import React from "react";
import Kittens from "../Kittens/Kittens";

const KittensList = ({ kittensArray }) => {
  return (
    <div>
      {kittensArray.map(kitten => (
        <Kittens
          key={kitten.id}
          id={kitten.id}
          name={kitten.name}
          phone={kitten.phone}
          email={kitten.email}
        />
      ))}
    </div>
  );
};

export default KittensList;
