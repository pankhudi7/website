import React from "react";
import styles from "./NewsComponent.module.css";
import news1 from "../../resources/news1.jpg";
import news2 from "../../resources/news2.jpg";
import news3 from "../../resources/news3.jpg";
import news4 from "../../resources/news4.png";
import news5 from "../../resources/About2.jpg";
import news6 from "../../resources/news6.jpg";
import news7 from "../../resources/news7.png";
import news8 from "../../resources/news8.png";
import news9 from "../../resources/news9.jpg";
import news10 from "../../resources/news10.jpg";

const NewsComponent = () => {
  const newsItems = [
    {
      imageSrc: news1,
      title: "1 May 2024 ",
      description:
        "TECHNAVIA INDIA announced the inauguration of new design office in Noida. Serving as a cornerstone for design department, this office would enhance the connectivity with clients and further strengthening its reach.",
    },
    {
      imageSrc: news2,
      title: "9-12 April 2024",
      description:
        "Team Technavia made a significant impact at Paint Expo 2024 in Karlsruhe, Germany, exploring cutting-edge painting and surface coating innovations.Technavia’s German partner, POMA Systems, had an impactful presence at the exhibition.",
    },
    {
      imageSrc: news10,
      title: "15-17 March 2024",
      description:
        "Technavia's team geared up for a productive company meeting followed by a well-deserved getaway to Goa. The brainstorming sessions and beachside relaxation gave an experience of team bonding, relaxation, and adventure. From serene beaches to thrilling water sports, delicious cuisine to lively nightlife, this trip of Technavia to Goa rejuvenated spirits, foster camaraderie, and created lasting memories.",
    },
    {
      imageSrc: news3,
      title: "20 September 2023",
      description:
        "Technavia was honoured by its esteemed client Tata Motors for implementing the robotic paint shop line. This was Technavia’s first breakthrough in a renowned OEM like Tata Motors. It has been instrumental for Technavia in achieving this milestone. Technavia had successfully completed the robotic painting system within the designated timeframe.",
    },
      {
        imageSrc: news4,
        title: '20th August 2023',
        description: "Technavia India declared the triumphant Grand Opening of its newest facility in Pune. This pivotal moment signifies Pune's emergence as a pivotal branch office, dedicated to serving the West India Region. This expansion not only broadens their reach but also underscores their unwavering dedication in staying close to their customers and delivering exceptional services.",
      },
      {
        imageSrc: news5,
        title: '29 June - 1 July 2023',
        description: 'Technavia was actively involved in the 4th Surface Coating Expo in Chennai, demonstrating its commitment to the industry. Mr. Ken Imamura, President of Technavia India, not only showcased completed projects but also offered valuable insights into the future of the paint automation business in India, fostering a forward-looking dialogue at the event.',
      },
      {
        imageSrc: news6,
        title: '28-29 November 2019',
        description: 'Technavia took centre stage at the 14th India Surface Coating Show, held at the India Habitat Centre in New Delhi from November 28th to 29th, 2019. At the prestigious CII International Conference on Surface Coating Technology, Mr. Ken Imamura, President of TECHNAVIA India, delivered an engaging presentation on the transformative capabilities of automatic paint recovery pigging systems in painting applications.',
      },
      {
        imageSrc: news7,
        title: '18 October 2019',
        description: "Technavia's new facility, located at Sector 37, Gurugram, was officially inaugurated on October 18th, 2019, by Mr. Akinori Urakawa, CEO of Yaskawa India",
      },
      {
        imageSrc: news8,
        title: '31 August - 2 September 2018',
        description: "Technavia participated in an event conducted by CII at Chennai. This was the 3rd edition of surface & coating expo held from 31st Aug to 2nd Sep 2018. Technavia displayed robotic system with automatic painting gun.",
      },
      {
        imageSrc: news9,
        title: '23-24 November 2017',
        description: "Technavia took part in 13th CII surface Coating exhibition held at Indian Habitat centre, New Delhi from 23-24 Nov.2017. This was their first ever participation in any exhibition. Technavia received a huge applaud for their vision and best wishes from many renowned clients for the future endeavours.",
      }
  ];

  return (
    <div className={styles.carousel}>
      <div className={styles.slides}>
        {newsItems.map((item, index) => (
          <div key={index} className={styles.slide}>

            <div className={styles.imageContainer} style={{ backgroundImage: `url(${item.imageSrc})` }}>
              
            </div>

            <div className={styles.content}>
              <h2 className={styles.title}>{item.title}</h2>
              <p className={styles.description}>{item.description}</p>
            </div> 
            {/* 

            */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsComponent;
