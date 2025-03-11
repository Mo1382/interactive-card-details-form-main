import React from "react";

export default function CardBack({ cvc }) {
  return (
    <div className="card-back">
      <div className="card-cvc">{cvc === "" ? "000" : cvc}</div>
    </div>
  );
}
