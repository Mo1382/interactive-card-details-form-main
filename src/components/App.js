import React from "react";
import { Fragment } from "react";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import Form from "./Form";
import Thank from "./Thank";

export default function App() {
  return (
    <Fragment>
      <div className="app-bg"></div>
      <div className="container">
        <div className="left">
          <CardFront />
          <CardBack />
        </div>
        <div className="right">
          <Form />
          {/* <Thank /> */}
        </div>
      </div>
    </Fragment>
  );
}
