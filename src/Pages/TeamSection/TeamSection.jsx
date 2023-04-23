import React, { useState } from "react";
import style from "./TeamSection.module.css";
import { BsArrowRight } from "react-icons/bs";
import { HiOutlineArrowCircleLeft } from "react-icons/hi";
import { HiOutlineArrowCircleRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export default function TeamSection() {
  const [isSample, setIsSample] = useState(true);
  const navigate = useNavigate();

  function handleAbout() {
    navigate("/abouttrainer");
  }

  function prev() {
    document.getElementById("teamCurousel").scrollLeft -= 700;
  }

  function next() {
    document.getElementById("teamCurousel").scrollLeft += 700;
  }

  const teamData = [
    {
      trainer: "Adam Smith",
      speciality: "Cardio Coach",
      imgUrl:
        "https://images.pexels.com/photos/6456303/pexels-photo-6456303.jpeg?auto=compress&cs=tinysrgb&w=1600",
      bio: "",
    },
    {
      trainer: "Steve Rogers",
      speciality: "Fitness Coach",
      imgUrl:
        "https://images.pexels.com/photos/4058411/pexels-photo-4058411.jpeg?auto=compress&cs=tinysrgb&w=1600",
      bio: "",
    },
    {
      trainer: "Elizabeth Olsen",
      speciality: "Yoga Trainer",
      imgUrl:
        "https://images.pexels.com/photos/4057112/pexels-photo-4057112.jpeg?auto=compress&cs=tinysrgb&w=1600",
      bio: "",
    },
    {
      trainer: "Clint Barton",
      speciality: "Fitness Coach",
      imgUrl:
        "https://images.pexels.com/photos/7339113/pexels-photo-7339113.jpeg?auto=compress&cs=tinysrgb&w=1600",
      bio: "",
    },
    {
      trainer: "Elizabeth Olsen",
      speciality: "Yoga Trainer",
      imgUrl:
        "https://images.pexels.com/photos/4057112/pexels-photo-4057112.jpeg?auto=compress&cs=tinysrgb&w=1600",
      bio: "",
    },
    {
      trainer: "Clint Barton",
      speciality: "Fitness Coach",
      imgUrl:
        "https://images.pexels.com/photos/7339113/pexels-photo-7339113.jpeg?auto=compress&cs=tinysrgb&w=1600",
      bio: "",
    },
  ];

  return (
    <div className={style.teamSection}>
      <h2>Meet Our Team</h2>
      <p>
        We are the team of experienced people, nutrition, sports and fitness
        passionate experts with talent and knowledge.
      </p>
      <div id="teamCurousel" className={style.teamCardBox}>
        {isSample
          ? teamData
              .filter((x, i) => i < 4)
              .map((item, index) => {
                return (
                  <TrainerCard
                    key={index}
                    trainer={item.trainer}
                    speciality={item.speciality}
                    imgUrl={item.imgUrl}
                    bio={item.bio}
                    onClick={handleAbout}
                  />
                );
              })
          : teamData.map((item, index) => {
              return (
                <TrainerCard
                  key={index}
                  trainer={item.trainer}
                  speciality={item.speciality}
                  imgUrl={item.imgUrl}
                  bio={item.bio}
                  onClick={handleAbout}
                />
              );
            })}
      </div>
      <div className={style.buttonSection}>
        <HiOutlineArrowCircleLeft
          className={style.navBtn}
          style={{ display: isSample && "none" }}
          onClick={prev}
        />
        <button id={style.teamBtn} onClick={() => setIsSample(!isSample)}>
          {isSample ? "SEE THE WHOLE TEAM" : "SHOW LESS"}
        </button>
        <HiOutlineArrowCircleRight
          className={style.navBtn}
          style={{ display: isSample && "none" }}
          onClick={next}
        />
      </div>
    </div>
  );
}

function TrainerCard({ trainer, speciality, imgUrl, bio, onClick }) {
  return (
    <div className={style.cardOutline}>
      <img className={style.card} src={imgUrl}></img>
      <div className={style.cardFoot}>
        <div className={style.nameSection}>
          <div>{trainer}</div>
          <BsArrowRight onClick={onClick} />
        </div>
        <small>{speciality}</small>
      </div>
    </div>
  );
}
