import React from "react";
import style from "./OutlinedButton.module.css";

export default function ContainedButton({ value }) {
  return <button className={style.containedBtn}>{value}</button>;
}
