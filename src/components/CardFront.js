import React from "react";

export default function CardFront({ name, number, expMonth, expYear }) {
  const expMonthStr = String(expMonth);
  const expYearStr = String(expYear);

  return (
    <div className="card-front">
      <div className="card-sign">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="84"
          height="47"
          viewBox="0 0 84 47"
          fill="none"
        >
          <g clip-path="url(#clip0_1_36)">
            <path
              d="M23.478 47C36.4445 47 46.956 36.4787 46.956 23.5C46.956 10.5213 36.4445 0 23.478 0C10.5115 0 0 10.5213 0 23.5C0 36.4787 10.5115 47 23.478 47Z"
              fill="white"
            />
            <path
              d="M83.5 23.4998C83.5 29.0648 78.993 33.5748 73.435 33.5748C67.876 33.5748 63.37 29.0648 63.37 23.4998C63.37 17.9348 67.876 13.4248 73.435 13.4248C78.993 13.4248 83.5 17.9348 83.5 23.4998Z"
              stroke="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_36">
              <rect width="84" height="47" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="card-number">
        {number === "" ? "0000 0000 0000 0000" : number}
      </div>
      <div className="card-footer">
        <div className="card-name">
          {name === "" ? "YOUR NAME" : name.toUpperCase()}
        </div>
        <div className="card-date">
          {expMonthStr === "" ? "00" : expMonthStr.padStart(2, 0)}/
          {expYearStr === "" ? "00" : expYearStr.padStart(2, 0)}
        </div>
      </div>
    </div>
  );
}
