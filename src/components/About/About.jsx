import "./About.css";
import aboutus from "../../resources/aboutUS.jpg";
import React, { forwardRef } from "react";
import Aos from "aos";
import { useEffect } from "react";

const About = forwardRef((props,ref) => {
  useEffect(()=>{
    Aos.init({duration:1000});
  },[])
  return (
    <section ref={ref} class="parallax-1">
      <div class="parallax-inner-1">
        <div class="parent" data-aos="fade-up">
          <div class="child aboutus-img">
            <img src={aboutus} alt="group pic" />
          </div>
          <div class="child" data-aos="fade-up">
            <h3 class="abtusHead">About Us</h3>
            <div class="abtusText">
              We are an established ISO certified organization and a renowned
              company with an excellent track record for the best customer
              satisfaction. We offer integrated manufacturing solutions with
              automation to achieve the desired production without diminishing
              the quality of the product. We provide comprehensive solution by
              going through the requirement of the client and propose the best
              possible system with a technical concept. Our work process
              includes the detail analysis and interpretation of the equipment
              which is subject to the requirement of customer on the basis of
              cost and technology. TECHNAVIA is leveraging opportunities in
              every form of automation with Robotics as one of its key growth
              drivers. With the flexibility, reliability and cost effective
              solution we aspires to revolutionize automation in the automotive
              and non- automotive sectors. Equipped with world-class facility
              and a highly experienced team of professionals, TECHNAVIA takes
              pride in being the leader in automation industry. With numerous
              technical tie-ups with leading international brands Technavia is
              committed to develop the solution in India and make in reach of
              Indian market.
              <p>
                We have an extensive experience in painting, handling, sealing
                and dispensing automation projects. We have successfully
                executed projects at leading OEMs and TIER 1 & 2 suppliers.
                Apart from robotic automation Technavia is also competent in
                providing customised system for a particular application.
                Technavia has a policy of investing a portion of its turnover in
                research and development and by it we foster our client’s growth
                with the continuous innovation in manufacturing sector.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default About; 
