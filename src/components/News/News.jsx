import React, {useState, useEffect} from "react";
import styles from "./NewsComponent.module.css";
import news1 from "../../resources/news1.jpg";
import news1second from "../../resources/news1second.jpg"
import news2 from "../../resources/news2.jpg";
import news2second from "../../resources/news2second.jpg"
import news3 from "../../resources/news3.jpg";
import news4 from "../../resources/news4.png";
import news4second from "../../resources/news4second.jpg"
import news5 from "../../resources/About2.jpg";
import news5second from "../../resources/news5second.jpg"
import news6 from "../../resources/news6.jpg";
import news6second from "../../resources/news6second.jpg"
import news7 from "../../resources/news7.png";
import news7second from "../../resources/news7second.png"
import news7third from "../../resources/news7third.png"
import news9 from "../../resources/news9.jpg";
import news10 from "../../resources/news10.jpg";
import news10second from "../../resources/news10second.jpg"
import news10third from "../../resources/news10third.jpg"

const NewsComponent = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const newsItems = [
    {
      images: [news1,news1second] ,
      title: "1 May 2024. Noida  ",
      description:
        "TECHNAVIA INDIA announced the inauguration of new design office in Noida. Serving as a cornerstone for design department, this office would enhance the connectivity with clients and further strengthening its reach.",
    },
    {
      images: [news2,news2second],
      title: "9-12 April 2024. Karlsruhe, Germany",
      description:
        "Team Technavia made a significant impact at Paint Expo 2024 in Karlsruhe, Germany, exploring cutting-edge painting and surface coating innovations.Technavia’s German partner, POMA Systems, had an impactful presence at the exhibition.",
    },
    {
      images: [news10,news10third,news10second],
      title: "15-17 March 2024. Goa",
      description:
        "Technavia's team geared up for a productive company meeting followed by a well-deserved getaway to Goa. The brainstorming sessions and beachside relaxation gave an experience of team bonding, relaxation, and adventure. From serene beaches to thrilling water sports, delicious cuisine to lively nightlife, this trip of Technavia to Goa rejuvenated spirits, foster camaraderie, and created lasting memories.",
    },
    {
      images: [news3,news3],
      title: "20 September 2023. Pune",
      description:
        "Technavia was honoured by its esteemed client Tata Motors for implementing the robotic paint shop line. This was Technavia’s first breakthrough in a renowned OEM like Tata Motors. It has been instrumental for Technavia in achieving this milestone. Technavia had successfully completed the robotic painting system within the designated timeframe.",
    },
    {
      images: [news4,news4second],
      title: "20th August 2023. Pune",
      description:
        "Technavia India declared the triumphant Grand Opening of its newest facility in Pune. This pivotal moment signifies Pune's emergence as a pivotal branch office, dedicated to serving the West India Region. This expansion not only broadens their reach but also underscores their unwavering dedication in staying close to their customers and delivering exceptional services.",
    },
    {
      images: [news5,news5second],
      title: "29 June - 1 July 2023. Chennai",
      description:
        "Technavia was actively involved in the 4th Surface Coating Expo in Chennai, demonstrating its commitment to the industry. Mr. Ken Imamura, President of Technavia India, not only showcased completed projects but also offered valuable insights into the future of the paint automation business in India, fostering a forward-looking dialogue at the event.",
    },
    {
      images: [news6,news6second],
      title: "28-29 November 2019. New Delhi",
      description:
        "Technavia took centre stage at the 14th India Surface Coating Show, held at the India Habitat Centre in New Delhi from November 28th to 29th, 2019. At the prestigious CII International Conference on Surface Coating Technology, Mr. Ken Imamura, President of TECHNAVIA India, delivered an engaging presentation on the transformative capabilities of automatic paint recovery pigging systems in painting applications.",
    },
    {
      images: [news7,news7second,news7third],
      title: "18 October 2019",
      description:
        "Technavia's new facility, located at Sector 37, Gurugram, was officially inaugurated on October 18th, 2019, by Mr. Akinori Urakawa, CEO of Yaskawa India",
    },
    
    {
      images: [news9,news9],
      title: "23-24 November 2017",
      description:
        "Technavia took part in 13th CII surface Coating exhibition held at Indian Habitat centre, New Delhi from 23-24 Nov.2017. This was their first ever participation in any exhibition. Technavia received a huge applaud for their vision and best wishes from many renowned clients for the future endeavours.",
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === newsItems[currentImageIndex].images.length - 1 ? 0 : prevIndex + 1));
    }, 3000); 

    return () => clearInterval(interval);
  }, [currentImageIndex, newsItems]);

  return (
    <>
    <div className={styles.newscontainer}>
    <div className={styles.line}></div>
    <div className={styles.newscontent}>In the Spotlight</div>
    </div>
    <div className={styles.carousel}>
      <div className={styles.slides}>
        {newsItems.map((item, index) => (
          <div key={index} className={styles.slide}>
        
             <div className={styles.imageContainer}>
            <img src={item.images[currentImageIndex]} alt={`News ${index + 1}`} className={styles.slideImage} />
          </div>

            <div className={styles.content}>
              <h2 className={styles.title}>{item.title}</h2>
              <p className={styles.description}>{item.description}</p>
            </div>
        </div>
        ))}
      </div>
    </div>
    </>

  );
};

export default NewsComponent;
