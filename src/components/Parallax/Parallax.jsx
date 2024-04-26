import React from "react";
import styles from "./Parallax.module.css";

const Parallax = () => {
  return (
    <div className={styles.mainwrapper}>
      <div className={styles.parallaxContainer}>
        <div className={styles.contentBox}>
          <h1>OUR SERVICES</h1>
          <p>Technavia delivers top-tier service, ensuring system stability through proactive maintenance, 
            customized training, and swift issue resolution, fostering trust and reliability. Trust us
            for comprehensive service support that keeps your systems running smoothly and efficiently.</p>
          <button className={styles.servicebutton}>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Parallax;
