import React from "react";
import styles from "./AppCard.module.css";
import app1 from "../../resources/app1.jpg";

export const cardData = [
  { title: 'Painting Applications', text: 'Technavia specializes in comprehensive painting automation solutions, offering turnkey projects that encompass the entire spectrum, from paint kitchen setup to robotics integration, applicator selection, and paint dosing equipment. Our expertise lies in tailoring the most suitable system by meticulously choosing the automation process, applicator, and paint circulation system.', imageUrl: app1 },
  { title: 'Sealing and Dispensing Applications', text: 'Technavia excels in providing robotic automated solutions for windshield sealing, hot melt dispensing in the lighting industry, and various other dispensing applications essential in the automotive and general industries. We have successfully implemented numerous robotic systems for underbody sealing and PVC coating in major OEMs. Our turnkey solutions encompass everything from pumps, dosing units, and dispensing equipment to automation, streamlining the entire process.', imageUrl: app1 },
  { title: 'Handling Applications', text: 'Technavia excels in providing robotic automated solutions for windshield sealing, hot melt dispensing in the lighting industry, and various other dispensing applications essential in the automotive and general industries. We have successfully implemented numerous robotic systems for underbody sealing and PVC coating in major OEMs. Our turnkey solutions encompass everything from pumps, dosing units, and dispensing equipment to automation, streamlining the entire process.', imageUrl: app1 },
];

const AppCard = () => {
  const handleReadMore = (index) => {
    console.log(`Read More for index ${index}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {cardData.map((card, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardtitle}>{card.title}</h3>
              <div className={styles.cardtext}>
                {card.text && <p>{card.text}</p>}
              </div>
              {card.text && <button className={styles.popup} onClick={() => handleReadMore(index)}>Read More</button>}
            </div>
            {card.imageUrl && <div className={styles.cardImage} style={{backgroundImage: `url(${card.imageUrl})`}}></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppCard;

