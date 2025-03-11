import React, { Fragment } from "react";
import ErrorMsg from "./ErrorMsg";

export default function Input({
  value,
  onChange,
  id,
  placeholder,
  width,
  showError,
  showShortNumberError,
  showWrongNumberError,
  children,
}) {
  return (
    <div
      class={`form-group ${width === "half" ? "half" : ""}${
        width === "quarter" ? "quarter" : ""
      }`}
    >
      <label for={id}>{children}</label>
      {width !== "quarter" && (
        <input
          value={value}
          onChange={onChange}
          type="text"
          id={id}
          placeholder={placeholder}
          className={showError ? "error" : ""}
        />
      )}
      {width !== "quarter" && showError && <ErrorMsg>Can’t be blank</ErrorMsg>}
      {!showError && showShortNumberError && (
        <ErrorMsg>Number is too short</ErrorMsg>
      )}
      {!showError && !showShortNumberError && showWrongNumberError && (
        <ErrorMsg>Wrong format, numbers only</ErrorMsg>
      )}

      {width === "quarter" && (
        <Fragment>
          <div class="inputs">
            <input
              value={value[0]}
              onChange={onChange[0]}
              type="text"
              id={id}
              placeholder={placeholder[0]}
              className={showError[0] ? "error" : ""}
            />
            <input
              value={value[1]}
              onChange={onChange[1]}
              type="text"
              placeholder={placeholder[1]}
              className={showError[1] ? "error" : ""}
            />
          </div>
          {showError.includes(true) && (
            <span class="error-msg">Can’t be blank</span>
          )}
        </Fragment>
      )}
    </div>
  );
}
