import React, { useState } from "react";
import { Fragment } from "react";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import Form from "./Form";
import Thank from "./Thank";

export default function App() {
  const [isConfiremed, setIsConfiremed] = useState(false);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvc, setCVC] = useState("");

  const [showNameError, setShowNameError] = useState(false);
  const [showNumberEmptyError, setShowNumberEmptyError] = useState(false);
  const [showShortNumberError, setShowShortNumberError] = useState(false);
  const [showWrongNumberError, setShowWrongNumberError] = useState(false);
  const [showExpMonthError, setShowExpMonthError] = useState(false);
  const [showExpYearError, setShowExpYearError] = useState(false);
  const [showCVCError, setShowCVCError] = useState(false);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeNumber(e) {
    const cardNumber = e.target.value.replaceAll(" ", "");
    const cardNumberLength = cardNumber.length;

    if (cardNumberLength > 16) return;

    if (cardNumberLength <= 4) {
      setNumber(cardNumber);
      return;
    } else if (cardNumberLength <= 8) {
      setNumber(`${cardNumber.slice(0, 4)} ${cardNumber.slice(4)}`);
      return;
    } else if (cardNumberLength <= 12) {
      setNumber(
        `${cardNumber.slice(0, 4)} ${cardNumber.slice(4, 8)} ${cardNumber.slice(
          8
        )}`
      );
      return;
    } else if (cardNumberLength <= 16) {
      setNumber(
        `${cardNumber.slice(0, 4)} ${cardNumber.slice(4, 8)} ${cardNumber.slice(
          8,
          12
        )} ${cardNumber.slice(12)}`
      );
      return;
    }
  }

  function handleChangeExpMonth(e) {
    const expMonthStr = e.target.value;
    const expMonthNum = +e.target.value;
    const expMonthLength = expMonthStr.length;

    if (expMonthLength > 2) return;
    if (expMonthNum > 12) return;
    if (expMonthStr.search(/[a-zA-Z]/g) !== -1) return;

    setExpMonth(expMonthStr);
  }

  function handleChangeExpYear(e) {
    const expYearStr = e.target.value;
    const expYearLength = expYearStr.length;

    if (expYearLength > 2) return;
    if (expYearStr.search(/[a-zA-Z]/g) !== -1) return;

    setExpYear(expYearStr);
  }

  function handleChangeCVC(e) {
    const CVCStr = e.target.value;
    const CVCLength = CVCStr.length;

    if (CVCLength > 4) return;

    setCVC(CVCStr);
  }

  function handleResetErrors() {
    setShowNameError(false);
    setShowNumberEmptyError(false);
    setShowShortNumberError(false);
    setShowWrongNumberError(false);
    setShowExpMonthError(false);
    setShowExpYearError(false);
    setShowCVCError(false);
  }

  function handleResetInputs() {
    setName("");
    setNumber("");
    setExpMonth("");
    setExpYear("");
    setCVC("");
  }

  function handleConfirm(e) {
    e.preventDefault();

    handleResetErrors();

    if (!isConfiremed) {
      if (
        !name ||
        !number ||
        !expMonth ||
        !expYear ||
        !cvc ||
        number.replaceAll(" ", "").length < 16 ||
        number.search(/[a-zA-Z]/g) !== -1
      ) {
        if (!name) setShowNameError(true);
        if (!number) setShowNumberEmptyError(true);
        if (number.replaceAll(" ", "").length < 16)
          setShowShortNumberError(true);
        if (number.search(/[a-zA-Z]/g) !== -1) setShowWrongNumberError(true);
        if (!expMonth) setShowExpMonthError(true);
        if (!expYear) setShowExpYearError(true);
        if (!cvc) setShowCVCError(true);

        return;
      }

      setIsConfiremed(true);
    } else {
      handleResetErrors();
      handleResetInputs();

      setIsConfiremed(false);
    }
  }

  return (
    <Fragment>
      <div className="app-bg"></div>
      <div className="container">
        <div className="left">
          <CardFront
            name={name}
            number={number}
            expMonth={expMonth}
            expYear={expYear}
          />
          <CardBack cvc={cvc} />
        </div>
        <div className="right">
          {isConfiremed ? (
            <Thank onConfirm={handleConfirm} />
          ) : (
            <Form
              name={name}
              number={number}
              expMonth={expMonth}
              expYear={expYear}
              cvc={cvc}
              onChangeName={handleChangeName}
              onChangeNumber={handleChangeNumber}
              onChangeExpMonth={handleChangeExpMonth}
              onChangeExpYear={handleChangeExpYear}
              onChangeCVC={handleChangeCVC}
              showNameError={showNameError}
              showNumberEmptyError={showNumberEmptyError}
              showShortNumberError={showShortNumberError}
              showWrongNumberError={showWrongNumberError}
              showExpMonthError={showExpMonthError}
              showExpYearError={showExpYearError}
              showCVCError={showCVCError}
              onConfirm={handleConfirm}
            />
          )}
        </div>
      </div>
    </Fragment>
  );
}
