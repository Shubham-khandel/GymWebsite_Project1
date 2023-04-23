import React, { useRef } from "react";
import styles from "./TrainingPrograms.module.css";
import { HiOutlineArrowCircleLeft } from "react-icons/hi";
import { HiOutlineArrowCircleRight } from "react-icons/hi";

export default function TrainingPrograms() {
  function next() {
    document.getElementById("curousel").scrollLeft += 700;
  }

  function prev() {
    document.getElementById("curousel").scrollLeft -= 700;
  }

  const trainingData = [
    {
      type: "Yoga",
      imgUrl:
        "https://images.pexels.com/photos/2597205/pexels-photo-2597205.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      type: "Body Building",
      imgUrl:
        "https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      type: "Aerobic",
      imgUrl:
        "https://media.istockphoto.com/id/1064119338/photo/attractive-sporty-girls-in-bodysuits-training-at-aerobics-workout-on-grey.jpg?b=1&s=170667a&w=0&k=20&c=ortzifR1s0SZtSVSW8YG_NW5IsjTUK26ifqwn3HnTaU=",
    },
    {
      type: "Flexibility",
      imgUrl:
        "https://images.pexels.com/photos/4057112/pexels-photo-4057112.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      type: "Zumba",
      imgUrl:
        "https://media.istockphoto.com/id/1441559219/photo/zumba-fitness.jpg?b=1&s=612x612&w=0&k=20&c=FcwUo56FpgMQljhNF9ijmL_YKS9plZLZ6RvPdAvHJv0=",
    },
    {
      type: "Yoga",
      imgUrl:
        "https://images.pexels.com/photos/2597205/pexels-photo-2597205.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      type: "Body Building",
      imgUrl:
        "https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  return (
    <div className={styles.carouselContainer}>
      <div id={styles.carouselText}>Top Notch Facilities</div>
      <p>
        I'm a paragraph. Click here to add your own text and edit me. I’m a
        great place for you to tell a story and let your users know a little
        more about you.
      </p>
      <div id="curousel" className={styles.carousel}>
        {trainingData.map((item, index) => {
          return (
            <TrainingTypeCard
              key={index}
              type={trainingData[index].type}
              imgUrl={trainingData[index].imgUrl}
            />
          );
        })}
      </div>
      {/* <ContainedButton /> */}
      <div className={styles.curouselNav}>
        <HiOutlineArrowCircleLeft className={styles.navBtn} onClick={prev} />
        <div>View All</div>
        <HiOutlineArrowCircleRight className={styles.navBtn} onClick={next} />
      </div>
    </div>
  );
}

function TrainingTypeCard({ type, imgUrl }) {
  return (
    <div className={styles.cardBox}>
      <img className={styles.card} src={imgUrl}></img>
      <div id={styles.cardTypeText}>{type}</div>
    </div>
  );
}

function ContainedButton() {
  return <button className={styles.containedBtn}>View All</button>;
}
