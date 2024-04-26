import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "./Testimonials.module.css";
import hero from "../../resources/HeroLogo.png";
import bajaj from "../../resources/Bajajlogo.png";
import plustech from "../../resources/PlustechLogo.jpeg";

export default class Testimonials extends Component {
  render() {
    return (
      <div class={styles.carouselcard}>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
        >
        
            <div className={styles.myCarousel}>
              <div className={styles.content}>
                <p>
                  Working with Technavia has been a game-changer for our
                  manufacturing process. Their robotic services have
                  revolutionized our production line, increasing efficiency and
                  accuracy beyond our expectations. They are professional,
                  knowledgeable, and dedicated to delivering exceptional
                  results.
                </p>
                <div className={styles.logoimage}>
                  <img src={hero} alt="hero" />
                </div>
              </div>
            </div>
          
            <div className={styles.myCarousel}>
              <div className={styles.content}>
                <p>
                  We were incredibly impressed with the level of service and
                  support provided by Technavia India Pvt Ltd. during our
                  project.Their dedication to customer satisfaction is truly
                  commendable
                </p>
                <div className={styles.logoimage}>
                  <img src={bajaj} alt="hero" />
                </div>
              </div>
            </div>
        
            <div className={styles.myCarousel}>
              <div className={styles.content}>
                <p>
                  We were incredibly impressed with the level of service and
                  support provided by Technavia India Pvt Ltd. during our
                  project.Their dedication to customer satisfaction is truly
                  commendable
                </p>
                <div className={styles.logoimage}>
                  <img src={plustech} alt="hero" />
                </div>
              </div>
            </div>
         
        </Carousel>
      </div>
    );
  }
}
