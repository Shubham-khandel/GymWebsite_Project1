import React from "react";
import TrainingPrograms from "./TrainigProgramSection/TrainingPrograms";

import AboutUs from "./AboutUs/AboutUs";

import Slider from "./Slider";

const slides = [
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMs9BiZ0-JjSrNNNjqGFHhXwyJRGRjIjiNcjcN-QoQUlV4rdoBzNe380tEz_IBjATcirE&usqp=CAU",
  },
  {
    url: "https://media.istockphoto.com/id/1320144030/photo/still-life-shot-of-exercise-equipment-in-a-gym.webp?s=1024x1024&w=is&k=20&c=4ZgAJIZv7cCwmt-yWoCoRY20VvRCWxwKqo7u9H-yYWw=",
  },
  {
    url: "https://thumbs.dreamstime.com/b/dumbbells-shelf-workout-gym-copy-space-blurred-gym-background-preparation-gym-exercises-workout-gym-161393354.jpg",
  },
  {
    url: "https://thumbs.dreamstime.com/b/dumbbell-barbell-workout-gym-empty-space-blurred-gym-background-dumbbell-barbell-workout-gym-space-161296647.jpg",
  },
  {
    url: "https://thumbs.dreamstime.com/b/dumbbells-shelf-workout-gym-copy-space-blurred-gym-background-preparation-gym-exercises-workout-gym-161393354.jpg",
  },
];

const containerStyles = {
  width: "100vw",
  height: "100vh",

  border: "1px solid green",
};
import styles from "./Home.module.css";
import Footer from "../Components/Footer";

function HomePage() {
  return (
    <div>

      <div style={containerStyles}>
          <Slider slides={slides} />
        </div>
      <AboutUs />
      <TrainingPrograms />
      <Footer />
      <div className={styles.homeSection}>
        <AboutUs />
        <TrainingPrograms />

        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
