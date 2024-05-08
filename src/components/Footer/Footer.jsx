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
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Plot no.223, Pace City II,<br/>
            Sector 37, Gurugram, <br/>
            Haryana 122001
            <br />
            <FontAwesomeIcon icon={faPhone} /> 0124 401 5757 <br />
          </div>
        </div>

        <div className={styles.loc}>
          <div className={styles.footerhead}>
            Branch Offices
            </div>
          <div class={styles.infofooter}>
            <a href="https://www.google.com/maps/place/ION+7/@18.6341372,73.7986629,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2b9ac6a433ebd:0xac74692404c779c6!8m2!3d18.6341321!4d73.8012378!16s%2Fg%2F11lgnr03zl?entry=ttu" target="blank"> Pune </a> <h6>302, ION7, Morewadi, Pimpri-Chinchwad, Maharashtra 411018 </h6> <br/>
            <a href="https://www.google.com/maps/place/Worcoz+Coworking/@28.6296546,77.3763818,17z/data=!4m14!1m7!3m6!1s0x390cef8cdf6c7ca9:0x26e011dc817afe96!2sWorcoz+Coworking!8m2!3d28.62965!4d77.3809952!16s%2Fg%2F11vyc8_61r!3m5!1s0x390cef8cdf6c7ca9:0x26e011dc817afe96!8m2!3d28.62965!4d77.3809952!16s%2Fg%2F11vyc8_61r?entry=ttu" target="blank"> Noida </a> <h6>A24, First Floor, A Block, Sector 63, Noida, Uttar Pradesh 201301</h6><br/>

            <div className={styles.emails}>
              <h6>Reach out to us at: </h6> <br/>
              For Job Queries : <a href ="mailto:hr@technaviaindia.com">hr@technaviaindia.com</a>
              <br/>
              For Business Inquiries : <a href ="mailto:sales@technaviaindia.com ">sales@technaviaindia.com</a>
              
              </div>
            
          </div>
        </div> 
      </div>

      <div className={styles.copy}>Technavia © 2024. All Rights Reserved.</div>
    </footer>
  );
};

export default Footer;
