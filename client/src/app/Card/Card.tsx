"use client";
import React, { useState } from "react";
import "./card.css";
import customStyle from "./custom.module.css";
import customCardStyle from "./customCard.module.scss";
import clsx from "clsx";

export default function Card() {
  const [expanding, setExpanding] = useState(false);

  return (
    <div
      className={clsx("card", {
        [`${customStyle.card} ${customCardStyle.card}`]: expanding,
      })}
    >
      Card
    </div>
  );
}
