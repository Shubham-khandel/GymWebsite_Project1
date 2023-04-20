import React from "react";
import style from "./PriceCardPremium.module.css";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function PriceCardPremium() {
  return (
    <div className={style.priceCardContainer}>
      <div id={style.planName}>
        <h2>Premium Plan</h2>
        <div id={style.tag}>Popular</div>
      </div>
      <div id={style.priceBox}>
        <div id={style.price}>$35</div>
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
