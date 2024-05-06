import React, { useState, useEffect } from 'react';
import styles from './testimonial.module.css'; 
import hero from "../../resources/HeroLogo.png";
import bajaj from "../../resources/Bajajlogo.png";
import plustech from "../../resources/PlustechLogo.jpeg";
import sswl from "../../resources/sswl.jpg"

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const data = [
    {
      text: 'We are proud of You and Your team for everything you have done to convert "An Impossible to a Possible."',
      image: bajaj,
      
    },
    {
      text: 'Working with Technavia has been a game-changer for our manufacturing process. Their robotic services have revolutionized our production line, increasing efficiency and accuracy beyond our expectations.',
      image: hero,
    },
    {
      text: 'We greatly appreciate the adherence to the main equipment delivery schedule and the swift resolution of identified issues.',
      image: plustech,
    },
    {
      text: "Technavia's service is a cornerstone of excellence, boasting knowledgeable engineers who consistently deliver exceptional results.",
      image: sswl,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    }, 4000); 

    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <>
    <div className={styles.tcontainer}>
    <div className={styles.line}></div>
    <div className={styles.content}>What Our Clients Say</div>
    </div>
    <div className={styles.carousel}>
      {data.map((item, index) => (
        <div key={index} className={`${styles.slide} ${index === activeIndex ? styles.active : ''}`}>
          <div className={styles.testcard}>
          <div className={styles.image}>
          <img src={item.image} alt={`Image ${index + 1}`} />
          <div className={styles.text}>{item.text}</div>
            
          </div>
        </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Testimonial;
