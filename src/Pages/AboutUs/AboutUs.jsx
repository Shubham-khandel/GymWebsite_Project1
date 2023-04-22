import React from "react";
import style from "./AboutUs.module.css";
import { toast } from "react-toastify";
import YoutubeEmbed from "./../../Components/UI/YoutubeEmbed/YoutubeEmbed";
import "react-toastify/dist/ReactToastify.css";
import ContainedButton from "../../Components/UI/Buttons/OutlinedButton";
function AboutUs() {
  const showToastMessage = () => {
    toast.success("Click from about us section", {
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
            <div className={style.aboutContentTitle}>About Us</div>
            <div className={style.aboutContentPara}>
              We are growing team of 60+ awesome superstars and we owe our
              success to each and every one of them!
            </div>
            <ContainedButton value={"Learn More"} onClick={showToastMessage} />
          </div>
        </div>
      </div>
      <div className={style.aboutUpperSection}>
        <div className={style.aboutContentBox}>
          <div className={style.innerContainer}>
            <div className={style.aboutContentTitle}>Why Choose Us?</div>
            <div className={style.aboutContentPara}>
              To lose weight or increase fitness levels, it’s time to try
              something different. GYM can help you achieve the results you
              want!
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
