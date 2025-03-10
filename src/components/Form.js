import React from "react";
import Input from "./Input";
import Button from "./Button";

export default function Form() {
  return (
    <form action="">
      <Input id="name" placeholder="e.g. Jane Appleseed" width="full">
        CARDHOLDER NAME
      </Input>
      <Input id="number" placeholder="e.g. 12345678 9123 0000" width="full">
        CARD NUMBER
      </Input>
      <div className="row">
        <Input id="date" placeholder={["MM", "YY"]} width="quarter">
          EXP. DATE (MM/YY)
        </Input>
        <Input id="cvc" placeholder="e.g. 123" width="half">
          CVC
        </Input>
      </div>
      <Button />
    </form>
  );
}
