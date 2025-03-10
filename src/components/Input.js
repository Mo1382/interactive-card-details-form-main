import React from "react";

export default function Input({ id, placeholder, width, children }) {
  return (
    <div
      class={`form-group ${width === "half" ? "half" : ""}${
        width === "quarter" ? "quarter" : ""
      }`}
    >
      <label for={id}>{children}</label>
      {width !== "quarter" && (
        <input type="text" id={id} placeholder={placeholder} />
      )}

      {width === "quarter" && (
        <div class="inputs">
          <input type="text" id={id} placeholder={placeholder[0]} />
          <input type="text" placeholder={placeholder[1]} />
        </div>
      )}
    </div>
  );
}
