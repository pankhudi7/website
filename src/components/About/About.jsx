import React , { useRef } from "react";
import styles from "./About.module.css";
import { motion } from "framer-motion";
import image from "../../resources/Home2.jpg"
import about2 from '../../resources/About2.jpg'
import about3 from '../../resources/About3.jpg'


function About() {
  const scrollRef = useRef(null)

  return (
    <div className={styles.parent }>
      <div className={styles.mainContainer} >
        <div className={styles.imageContainer} style={{backgroundImage: `url(${image})`}}></div>
        <div className={styles.imageContainer} style={{backgroundImage: `url(${about2})`}}></div>
        <div className={styles.imageContainer} style={{backgroundImage: `url(${about3})`}}></div>
      </div>  
      <motion.div 
      className={styles.aboutusCard}>
        <div className={styles.line}></div>
        <div className={styles.heading}>ABOUT US</div>
        <div className={styles.content}>
          As an ISO certified organization, we are a leading name known for our
          unwavering commitment to customer satisfaction. Our integrated
          manufacturing solutions, coupled with automation, ensure optimal
          production outcomes without compromising product quality. At
          TECHNAVIA, we meticulously analyze and interpret client requirements
          to propose the most suitable technical concepts and systems. With a
          focus on cost-effectiveness and cutting-edge technology, we offer
          comprehensive solutions tailored to each client's needs. With Robotics
          as a cornerstone of our growth strategy, TECHNAVIA is at the forefront
          of automation, revolutionizing industries both within and beyond
          automotive sectors. Our solutions are renowned for their flexibility,
          reliability, and cost-effectiveness, setting new standards in
          automation.
          <p>
            Backed by world-class facilities and a highly experienced team, we
            take pride in our position as a leader in the automation industry.
            Our extensive experience includes successful projects in painting,
            handling, sealing, and dispensing automation for leading OEMs and
            TIER 1 & 2 suppliers.
          </p>
          Through strategic technical partnerships with leading international
          brands, we are committed to developing solutions within India and
          making them accessible to the Indian market. Our dedication to
          research and development ensures continuous innovation, fostering our
          clients' growth in the manufacturing sector.
        </div>
      </motion.div>
    </div>
  );
}

export default About;
