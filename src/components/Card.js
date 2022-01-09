import React from "react";
import "tachyons";

const Card = ({ email, id, name }) => {
  return (
    <div className="bg-lightest-blue navy br2 w5 tc grow ma2 pa2 dib shadow-5">
      <img alt="robot" src={"https://robohash.org/" + id + "?200x200"} />
      <div>
        <h2 className="h2">{name}</h2>
        <p className="h2">{email}</p>
      </div>
    </div>
  );
};

export default Card;
