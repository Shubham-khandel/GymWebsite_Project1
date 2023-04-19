import React from "react";
import style from "./AboutUs.module.css";
 import ContainedButton from "../../Components/UI/Buttons/OutlinedButton";

function AboutUs() {
  return (
    <div id={style.aboutUsContainer}>
      <div className={style.aboutUpperSection}>
        <img
          className={style.aboutImage}
          src={
            "https://static.wixstatic.com/media/ea26fd_ee108823ae614a41a3f6a028c90f6c87~mv2.jpg/v1/fill/w_863,h_707,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_ee108823ae614a41a3f6a028c90f6c87~mv2.jpg"
          }
        />
        <div className={style.aboutContentBox}>
          <div className={style.innerContainer}>
            <div className={style.aboutContentTitle}>
              Fitness Is for Everyone
            </div>
            <div className={style.aboutContentPara}>
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you.
            </div>
            <ContainedButton value={"Learn More"} />
          </div>
        </div>
      </div>
      <div className={style.aboutUpperSection}>
        <div className={style.aboutContentBox}>
          <div className={style.innerContainer}>
            <div className={style.aboutContentTitle}>
              Fitness Is for Everyone
            </div>
            <div className={style.aboutContentPara}>
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you.
            </div>
            <ContainedButton value={"Reserve a Spot"} />
          </div>
        </div>
        <img
          className={style.aboutImage}
          src={
            "https://static.wixstatic.com/media/ea26fd_e182d19292c744c6a2735309376b6e56~mv2.jpg/v1/fill/w_863,h_707,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_e182d19292c744c6a2735309376b6e56~mv2.jpg"
          }
        />
      </div>
    </div>
  );
}

export default AboutUs;
