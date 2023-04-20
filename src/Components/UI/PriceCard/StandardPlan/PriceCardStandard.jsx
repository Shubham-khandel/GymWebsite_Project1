import React from "react";
import style from "./../PriceCardLight.module.css";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function PriceCardStandard() {
  return (
    <div className={style.priceCardContainer}>
      <h2>Standard Plan</h2>
      <div id={style.priceBox}>
        <div id={style.price}>$20</div>
        <div>
          <div className={style.regularFont}>per user</div>
          <div className={style.regularFont}>per month</div>
        </div>
      </div>
      <div className={style.specific}>basic features for upto 10 users</div>
      <div id={style.buttonSection}>
        <ButtonDark />
        <ButtonLight />
      </div>
      <hr />
      <div className={style.lowerHalf}>
        <div id={style.featureText}>FEATURES</div>
        <div className={style.regularFont}>
          Everything is in your free plan plus...
        </div>
        <div id={style.footContent}>
          <div className={style.regularFont}>
            {" "}
            <AiOutlineCheckCircle style={{ color: "#c4306b" }} /> Access to
            basic features
          </div>
          <div className={style.regularFont}>
            <AiOutlineCheckCircle style={{ color: "#c4306b" }} /> Access to
            basic features
          </div>
          <div className={style.regularFont}>
            <AiOutlineCheckCircle style={{ color: "#c4306b" }} /> Access to
            basic features
          </div>
          <div className={style.regularFont}>
            <AiOutlineCheckCircle style={{ color: "#c4306b" }} /> Access to
            basic features
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonDark() {
  return <button id={style.ButtonDark}>Get Started</button>;
}

function ButtonLight() {
  return <button id={style.ButtonLight}>Get Started</button>;
}
