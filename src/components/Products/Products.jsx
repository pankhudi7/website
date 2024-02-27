import React, { forwardRef } from "react";
import FlippingCard from "./flippingCard.jsx";
import styles from "./Products.module.css";
import technafeeder from "../../resources/technafeeder.jpg"
import vertax from "../../resources/vertax-horax.jpg"
import technaslink from "../../resources/technaslink.jpg"
import scada from "../../resources/scada-system.jpg"
import bell from "../../resources/bell_cleaner.png"
import pigging from "../../resources/pigging-system.jpg"
import dozing from "../../resources/products_dozing.png"
import ccu from "../../resources/color.jpg"

const ThirdDiv = forwardRef((props, ref) => {
  
  return (
    <section ref={ref} class={styles.parallax-1}>
      <h1 className={styles.head}>PRODUCTS</h1>
      <div className={styles.productcontainer}>
        <div className={styles.cardspacing} >
        <FlippingCard headingText="TechnaFeeder"  image={technafeeder} flipCardBack={<ul className="bulletlist">
      <li>It is compact and two axes rotary feeder.</li>
      <li>Available in 3 Table pitch – 1400, 1600, 1800 mm.</li>
      <li>Saving the space by mounting the Robot on the wall above the Technafeeder.</li>
      <li>Maintenance-free AC Servo motor.</li>
      <li>Higher productivity by painting multiple workpieces at one time.</li>
    </ul> }/>
       </div>
        <div className={styles.cardspacing} >
          <FlippingCard headingText="Vertax & Horax" frontText="Vertax & Horax" image={vertax}  flipCardBack={<ul className="bulletlist">
          <li>Long-stroke and short-stroke operation.</li>
          <li>High loading capacity and stability.</li>
          <li>Slim column design allows space-saving arrangement of the guns.</li>
          <li>Extremely smooth running through toothed belt transmission.</li>
          <li>Maintenance free AC Servo motor.</li>
          </ul>} />
        </div>
        <div className={styles.cardspacing}>
          <FlippingCard headingText="Technaslink" frontText="Technaslink" image={technaslink} flipCardBack ={<ul className="bulletlist">
          <li>Best in class path and motion accuracy.</li>
          <li>Compact design and fits for any make robot model.</li>
          <li>Equipped with highest reliable components.</li>
          <li>Comes in wide range of options suiting different configuration.</li>
          <li>Easy to maintain and high in reliability.</li>
          </ul>} />
        </div>
        <div className={styles.cardspacing}>
          <FlippingCard headingText="Technaview (SCADA)" frontText="SCADA System - Technaview" image={scada} flipCardBack={<ul className="bulletlist">
            <li>Technaview employs SCADA, a system using computers and networked communication for high-level process control.</li>
            <li>It integrates PLC for logical process control, displaying real-time data for effective monitoring in the painting process.</li>
            <li>The SCADA system adheres to industry 4.0 standards, enhancing productivity through advanced monitoring and control capabilities.</li>
          </ul>} />
        </div>
        <div className={styles.cardspacing}>
          <FlippingCard headingText="Bell Cleaner" image={bell} flipCardBack={<ul className="bulletlist">
            <li>We developed Bell cleaner system for avoiding manual cleaning of bell shroud and thus risking it to get damage. </li>
            <li>Compact and sleek design</li>
            <li>Full stainless steel body</li>
            <li>Compatible with different make bells</li>
            <li>Easy in maintenance and cleaning</li>
            <li>Provision of mounting on floor and wall</li>
          </ul>} />
        </div>
        <div className={styles.cardspacing}>
          <FlippingCard headingText="Pigging system" frontText="Pigging system" image={pigging} flipCardBack={<ul className="bulletlist">
            <li>Another join development by Technavia and POMA systems.</li>
            <li>Pigging system recovers paint and hardener with optimal purity</li>
            <li>Shortens paint change time</li>
            <li>Saves the usage of solvent for cleaning and flushing purpose</li>
            <li>Eco friendly </li>
            <li>Easy to customised as per the system requirement</li>
          </ul>} />
        </div>
        <div className={styles.cardspacing}>
          <FlippingCard headingText="Dosing unit (FGP)" frontText="Dosing unit (FGP)" image={dozing} flipCardBack={<ul className="bulletlist">
            <li>FGP(Flushable Gear Pump) is our compact design dosing unit, which shaped with the joint effort of Technavia and POMA systems.</li>
            <li>Large band width of adjusting the paint volume by controlling the servo speed.</li>
            <li>Reduces contamination of dead volume of paint in the component.</li>
            <li>Most efficient in colour changing time.</li>
            <li>Quick in purging and reduces purging agent consumption.</li>
          </ul>} />
        </div>
        <div className={styles.cardspacing}>
          <FlippingCard headingText="Colour Changing Unit" frontText="Colour Changing Unit" image={ccu} flipCardBack={<ul className="bulletlist">
            <li>Developed as part of a technical collaboration between Technavia with a renowned German company POMA Systems.</li>
            <li>Optimised for quick colour changing</li>
            <li>Almost all components are made of stainless steel</li>
            <li>Easily customised to suit any special requirement</li>
            <li>Modular valve arrangement makes installation easy</li>

          </ul>} />
        </div>
      </div>
    </section>
  );
});
export default ThirdDiv;
