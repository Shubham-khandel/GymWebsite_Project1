import React from "react";
import style from "./AboutUs.module.css";

import { toast } from "react-toastify";

import ContainedButton from "../../components/UI/Buttons/OutlinedButton";
import YoutubeEmbed from "../../components/UI/YoutubeEmbed/YoutubeEmbed";
// import ContainedButton from "../../components/UI/Buttons/OutlinedButton";
// import YoutubeEmbed from "../../components/UI/YoutubeEmbed/YoutubeEmbed";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function AboutUs() {
  const showToastMessage = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div id={style.aboutUsContainer}>
      <div className={style.aboutUpperSection}>
        <div className={style.aboutImage}>
          <YoutubeEmbed embedId="HyQNCT2Jnq0" />
        </div>
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
            <ContainedButton
              value={"Reserve a Spot"}
              onClick={showToastMessage}
            />
          </div>
        </div>
        <div className={style.aboutImage}>
          <YoutubeEmbed embedId="eAlNvWgTDZQ" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
