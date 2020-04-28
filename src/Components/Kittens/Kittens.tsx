import React from "react";
import "./Kittens.scss";
import { IKittens } from "../../Redux/Kittens/Kittens.types";

const Kittens: React.FC<IKittens> = ({
  name,
  id,
  email,
  phone,
  website
}): JSX.Element => {
  return (
    <div className="kittens">
      <img
        src={`https://robohash.org/${id}?set=set4&size=200x200&bgset=bg2`}
        alt="kittens"
      />
      <div>
        <h3>Name:{name}</h3>
        <h5>Email:{email}</h5>
        <p>Website:{website}</p>
        <p>Phone:{phone}</p>
      </div>
    </div>
  );
};

export default Kittens;
