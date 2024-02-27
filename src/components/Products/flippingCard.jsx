import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import styles from './flippingCard.module.css';
const FlippingCard = (props) => {
  useEffect(()=>{
    Aos.init({duration:1000});
  },[])
  return (
    <div className={styles.flipCard} data-aos="zoom-in">
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
            <div className={styles.heading}>
               <div className={styles.headingText}>
               {props.headingText}
                </div>
            </div>
          <img src={props.image}  className={styles.avatar} alt='profile'/>
        </div>
        <div className={styles.flipCardBack}>
        {props.flipCardBack}
        </div>
      </div>
    </div>
  );
};
export default FlippingCard;



