import React from "react";
import style from "./TeamSection.module.css";
import { BsArrowRight } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";


export default function TeamSection() {
  const [submit, setSubmit] = useState(false);
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
  ];

  function handleSubmit() {
    setSubmit(true);
    if (submit) {
      toast.success("click from the training section");
    }
  }

  return (
    <div className={style.teamSection}>
      <h2>Meet Our Team</h2>
      <p>
        We are the team of experienced people, nutrition, sports and fitness
        passionate experts with talent and knowledge.
      </p>
      <div className={style.teamCardBox}>
        {teamData.map((item, index) => {
          return (
            <TrainerCard
              key={index}
              trainer={teamData[index].trainer}
              speciality={teamData[index].speciality}
              imgUrl={teamData[index].imgUrl}
              bio={teamData[index].bio}
            />
          );
        })}
      </div>
      <button id={style.teamBtn} onClick={handleSubmit}>
        SEE THE WHOLE TEAM
      </button>
      <ToastContainer/>
    </div>
  );
}

function TrainerCard({ trainer, speciality, imgUrl, bio }) {
  return (
    <div className={style.cardOutline}>
      <img className={style.card} src={imgUrl}></img>
      <div className={style.cardFoot}>
        <div className={style.nameSection}>
          <div>{trainer}</div>
          <BsArrowRight />
        </div>
        <small>{speciality}</small>
      </div>
    </div>
  );
}
