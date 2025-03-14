import React from "react";
import Button from "./Button";

export default function Thank({ onConfirm }) {
  return (
    <form onSubmit={onConfirm} class="thank-you">
      <div class="thank-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
        >
          <g clip-path="url(#clip0_31_150)">
            <path
              d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z"
              fill="url(#paint0_linear_31_150)"
            />
            <path
              d="M28 39.92L36.08 48L52.08 32"
              stroke="white"
              stroke-width="3"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_31_150"
              x1="-23.014"
              y1="11.507"
              x2="-7.77902e-07"
              y2="91.507"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#6348FE" />
              <stop offset="1" stop-color="#610595" />
            </linearGradient>
            <clipPath id="clip0_31_150">
              <rect width="80" height="80" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div class="thank-title">THANK YOU!</div>
      <div class="thank-subtitle">We’ve added your card details</div>
      <Button onConfirm={onConfirm} />
    </form>
  );
}
