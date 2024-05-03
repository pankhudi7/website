import React from 'react';
import styles from './NewsComponent.module.css';
import image from "../../resources/About2.jpg";
import news1 from "../../resources/news1.jpg";
import news2 from "../../resources/news2.jpg";
import news3 from "../../resources/news3.jpg";
import news4 from "../../resources/news4.png";
import news6 from "../../resources/news6.jpg";
import news7 from "../../resources/news7.png";
import news8 from "../../resources/news8.png";
import news9 from "../../resources/news9.jpg";


const NewsComponent = () => {
  const newsItems = [
    {
      imageSrc: news4,
      title: '20th August 2023',
      description: "Technavia India is excited to declare the triumphant Grand Opening of its newest facility in Pune on August 20th, 2023. This pivotal moment signifies Pune's emergence as a pivotal branch office, dedicated to serving the West India Region. This expansion not only broadens our reach but also underscores our unwavering dedication to staying close to our customers and delivering exceptional services.",
    },
    {
      imageSrc: image,
      title: '29 June - 1 July 2023',
      description: 'Technavia enthusiastically participated in the 4th Surface Coating Expo in Chennai. During the event, Mr. Ken Imamura, President of Technavia India, showcased our completed projects and provided insights into the future of paint automation business in India.',
    },
    {
      imageSrc: news6,
      title: '28-29 November 2019',
      description: 'TECHNAVIA actively engaged in the 14th India Surface Coating Show, hosted at the India Habitat Centre in New Delhi from November 28th to 29th, 2019. At the CII International Conference on Surface Coating Technology, Mr. Ken Imamura, President of TECHNAVIA India, delivered a compelling presentation on the potential of automatic paint recovery pigging systems in painting applications.     ',
    },
    {
      imageSrc: news7,
      title: '18 October 2019',
      description: "Technavia's new facility, located at Sector 37, Gurugram, was officially inaugurated on October 18th, 2019, by Mr. Akinori Urakawa, CEO of Yaskawa India",
    },
    {
      imageSrc: news8,
      title: '31 August - 2 September 2018',
      description: "In year 2018 technavia participated in another event conducted by CII at Chennai. This was the 3rd edition of surface & coating expo held from 31st Aug to 2nd Sep 2018. Technavia displayed robotic system with automatic painting gun.",
    },
    {
      imageSrc: news9,
      title: '23-24 November 2017',
      description: "Technavia took part in 13th CII surface Coating exhibition held at Indian Habitat centre, New Delhi from 23-24 Nov.2017. This was their first ever participation in any exhibition. Technavia received a huge applaud for their vision and best wishes from many renowned clients for the future endeavours.",
    }
  ];

  return (
    <div>
    <div className={styles.smallNewsContainer}>
        <div className={styles.smallNews}>
          <div className={styles.smallImage}><img src={news1} alt='news'/> </div>
          <div className={styles.newsText}>1 May 2024 <br/>
            TECHNAVIA INDIA proudly announces the inauguration of our new design office in Noida. Serving as a cornerstone 
          for our design department, this office enhances our connectivity with clients, further strengthening our reach.</div>
        </div>
        <div className={styles.smallNews}>
          <div className={styles.smallImage}><img src={news2} alt='news'/> </div>
          <div className={styles.newsText}>9-12 April 2024 <br/>
          Technavia's team showcased at Paint Expo 2024, Karlsruhe, Germany, delving into pioneering painting and surface coating advancements. We were impressed by our esteemed German partner, POMA Systems, and their fluid handling solutions.</div>
        </div>
        <div className={styles.smallNews}>
          <div className={styles.smallImage}><img src={news3} alt='news'/>  </div>
          <div className={styles.newsText}>20 September 2023 <br/>
          We're honored by Tata Motors' recognition, reflecting the quality of our work. Our collaboration in implementing the robotic paint shop line with Tata Motors Pune has been crucial, and we're proud to deliver within the set timeframe.</div>
        </div>

      </div>
    <div className={styles.newsContainer}>
      {newsItems.map((item, index) => (
        <div className={styles.card} key={index}>
          <img className={styles.newsimage} src={item.imageSrc} alt={item.title} />
          <div className={styles.content}>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.description}>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
    </div>

  );
}

export default NewsComponent;
