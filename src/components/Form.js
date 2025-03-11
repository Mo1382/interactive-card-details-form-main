import React from "react";
import Input from "./Input";
import Button from "./Button";

export default function Form({
  name,
  number,
  expMonth,
  expYear,
  cvc,
  onChangeName,
  onChangeNumber,
  onChangeExpMonth,
  onChangeExpYear,
  onChangeCVC,
  showNameError,
  showNumberEmptyError,
  showShortNumberError,
  showWrongNumberError,
  showExpMonthError,
  showExpYearError,
  showCVCError,
  onConfirm,
}) {
  return (
    <form action="" onSubmit={onConfirm}>
      <Input
        value={name}
        onChange={onChangeName}
        id="name"
        placeholder="e.g. Jane Appleseed"
        width="full"
        showError={showNameError}
      >
        CARDHOLDER NAME
      </Input>
      <Input
        value={number}
        onChange={onChangeNumber}
        id="number"
        placeholder="e.g. 12345678 9123 0000"
        width="full"
        showError={showNumberEmptyError}
        showShortNumberError={showShortNumberError}
        showWrongNumberError={showWrongNumberError}
      >
        CARD NUMBER
      </Input>
      <div className="row">
        <Input
          value={[expMonth, expYear]}
          onChange={[onChangeExpMonth, onChangeExpYear]}
          id="date"
          placeholder={["MM", "YY"]}
          width="quarter"
          showError={[showExpMonthError, showExpYearError]}
        >
          EXP. DATE (MM/YY)
        </Input>
        <Input
          value={cvc}
          onChange={onChangeCVC}
          id="cvc"
          placeholder="e.g. 123"
          width="half"
          showError={showCVCError}
        >
          CVC
        </Input>
      </div>
      <Button />
    </form>
  );
}
