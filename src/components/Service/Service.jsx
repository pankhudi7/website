import React from 'react';
import styles from "./Service.module.css";
import serviceone from "../../resources/serviceone.png"
import servicetwo from "../../resources/servicetwo.png"
import servicethree from "../../resources/servicethree.jpg"
import servicefour from "../../resources/servicefour.png"
import servicefive from "../../resources/servicefive.png"


const contentData = [
  {
    headline: 'Spare part Inventory',
    text: 'Technavia maintains an extensive spare inventory to ensure efficient service backup for our customers. Our inventory planning prioritizes critical parts and items with high lead times, ensuring prompt availability when needed. Regular inspections by our dedicated team ensure the ongoing condition of system parts, with timely recommendations for repairs or replacements to ensure smooth machine operation and prolong equipment lifespan. Trust Technavia for proactive maintenance strategies that optimize equipment performance and reliability.',
    imageSrc: serviceone,
    altText: 'Image 1',
  },
  {
    headline: 'System Upgradation',
    text: 'At Technavia, we excel not only in delivering cutting-edge systems for greenfield projects but also in upgrading existing application processes to introduce a fresh, revamped solution. Our team meticulously assesses the limitations of the current system and collaborates with clients to offer a range of optimal solutions, considering both technical specifications and commercial viability. Refurbishing an existing system presents various challenges, but with our expert engineering team, we meticulously explore every aspect to elevate the system to new heights and ensure seamless integration with the latest technology trends. Trust Technavia for innovative solutions that transform your processes and drive sustainable growth.',
    imageSrc: servicetwo,
    altText: 'Image 2',
  },
  {
    headline: 'Robot teaching',
    text: 'Technavia boasts a dedicated team specialized in teaching new model robots. Our engineering experts commence with offline teaching, meticulously assessing robot accessibility and determining optimal teaching trajectories to meet required cycle times. With extensive experience, our team has successfully executed numerous global projects involving teaching new models across various robot manufacturers. Trust Technavia for expert guidance in maximizing the efficiency and performance of your robotic systems.',
    imageSrc: servicethree,
    altText: 'Image 3',
  },
  {
    headline: 'Training',
    text: 'Technavia offers comprehensive professional training on both robots and applications to empower our customers with in-depth knowledge of the equipment we provide. Our training programs are designed to ensure safe and efficient operation of the system by operators. In our basic training sessions, we prioritize safety protocols and operational procedures, equipping operators to handle the system independently and effectively troubleshoot errors during breakdowns. For advanced training, we delve into the intricacies of the machines we supply, covering optional functions of the robot and emphasizing the critical aspects of preventive maintenance to maximize system performance. Technavia boasts dedicated training facilities equipped with training robots and peripheral painting equipment, providing hands-on learning experiences for our customers. Trust Technavia for comprehensive training solutions that enhance operational capabilities and system reliability.',
    imageSrc: servicefour,
    altText: 'Image 4',
  },
  {
    headline: 'Design Engineering',
    text: 'At Technavia, we conduct comprehensive research to develop innovative concepts for painting and handling applications. Our capabilities encompass simulation studies and offline programming across various robot manufacturers. We conduct thorough analyses, including cycle time studies and robot model selections tailored to each application. Our design engineering team excels in designing customized systems to meet specific application requirements. Through our commitment to developing new products, our team contributes to the MAKE IN INDIA campaign, playing a crucial role in promoting domestic manufacturing and innovation. Trust Technavia for pioneering solutions that drive progress and support local industries.',
    imageSrc: servicefive,
    altText: 'Image 5',
  },
];

function Service() {
  return (
    <div className={styles.service}>
    <div className={styles.overlay}>
        <h1 className={styles.overlayHeading}>OUR SERVICE POLICY</h1>
        <p className={styles.overlayContent}>In the event of breakdowns on-site, Technavia goes beyond mere analysis of root causes;
we proactively establish improvement plans and transparently communicate issues to
our customers. Our approach involves swift application of solutions on-site, closely
monitored for maximum efficiency.<br/>
<br/>We adhere to a standardized process, regularly sharing and addressing issues through
systematic checks and non-operational inspections. This allows us to schedule preventive
maintenance plans customized to each equipment's specific requirements. In our
commitment to proactive maintenance, we implement predictive strategies by
continuously managing equipment history. Furthermore, we provide comprehensive
manuals for addressing failures and deploy monitoring systems to ensure thorough
oversight of equipment performance. Trust Technavia for proactive maintenance
solutions that keep your operations running smoothly and prevent future disruptions.</p>
      </div>
      <div className={styles.wrapper}> 
        {contentData.map((content, index) => (
          <article key={index} className={`${styles.article} ${styles.group} ${index % 2 === 0 ? styles.left : styles.right}`}>
            <div className={styles.imageContainer}>
              <img src={content.imageSrc} alt={content.altText} className={styles.image} />
            </div>
            <div className={styles.contentContainer}>
              <h2 className={styles.headline}>{content.headline}</h2>
              <p className={styles.servicepara}>{content.text}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Service;
