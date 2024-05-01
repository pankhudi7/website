import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.mapContainer}>
        <div className={styles.map}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.4662919341463!2d76.99606727456477!3d28.435356893009015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1946b55c93bf%3A0xb70dfc816f4b57c9!2sTechnavia%20India%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1714124717285!5m2!1sen!2sin"></iframe>
        </div>

        <div className={styles.loc}>
          <h2 className={styles.headingfooter}>Technavia India Pvt Ltd</h2>
          <div class={styles.infoloc}>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Plot no.223, Pace City II,
            Sector 37, Gurugram, Haryana 122001
            <br />
            <FontAwesomeIcon icon={faPhone} /> 0124 401 5757 <br />
          </div>
        </div>

        <div className={styles.loc}>
          <div className={styles.footerhead}>
            Branch Offices
            </div>
          <div class={styles.infofooter}>
            <a href="https://maps.app.goo.gl/NgnQMei6qyncRtQ37" target="blank"> Pune </a> <br/>
            <a href="#"> Noida </a> <br/>

            <div className={styles.emails}>
              Reach out to us at- <br/>
              hr@technaviaindia.com
              sales@technaviaindia.com 
              </div>
            
          </div>
        </div> 
      </div>

      <div className={styles.copy}>Technavia © 2024. All Rights Reserved.</div>
    </footer>
  );
};

export default Footer;
