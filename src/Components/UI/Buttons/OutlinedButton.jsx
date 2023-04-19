import React from "react";
import style from "./OutlinedButton.module.css";

export default function ContainedButton({ value, onClick }) {
  return (
    <button className={style.containedBtn} onClick={onClick}>
      {value}
    </button>
  );
}
