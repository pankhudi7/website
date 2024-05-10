import React from "react";
import styles from "./Marquee.module.css";
import ashok from "../../components/Logos/logos/ashok.png";
import atia from "../../components/Logos/logos/atia.jpg";
import wipro from "../../components/Logos/logos/wipro.png";
import bajaj from "../../components/Logos/logos/Bajajlogo.png";
import daifuku from "../../components/Logos/logos/daifuku.png";
import daimler from "../../components/Logos/logos/daimler.png";
import gabriel from "../../components/Logos/logos/gabriel.png";
import hero from "../../components/Logos/logos/HeroLogo.png";
import ijl from "../../components/Logos/logos/ijl.jpg"
import jpm from "../../components/Logos/logos/jpm.jpg"
import koseiminda from "../../components/Logos/logos/koseiminda.png"
import lumax from "../../components/Logos/logos/Lumax.png"
import mahindra from "../../components/Logos/logos/Mahindra.png"
import matlogo from "../../components/Logos/logos/matlogo.png"
import musashi from "../../components/Logos/logos/musashi.png"
import mindarika from "../../components/Logos/logos/mindarika.jpg"
import neelmetal from "../../components/Logos/logos/neelmetal.png"
import neolite from "../../components/Logos/logos/neolite.jpg"
import nihon from "../../components/Logos/logos/nihon.png"
import nissan from "../../components/Logos/logos/nissan.jpg"
import novaris from "../../components/Logos/logos/novares.jpg"
import nissin from "../../components/Logos/logos/nissin.png"
import orient from "../../components/Logos/logos/orient.png"
import parker from "../../components/Logos/logos/parker.jpg"
import plustech from "../../components/Logos/logos/PlustechLogo.jpeg"
import sonalika from "../../components/Logos/logos/sonalika.jpg"
import sswl from "../../components/Logos/logos/sswl.jpg"
import suzuki from "../../components/Logos/logos/suzuki.png"
import tata from "../../components/Logos/logos/tata.png"
import tyota from "../../components/Logos/logos/toyota.png"
import tvs from "../../components/Logos/logos/tvs.png"
import unominda from "../../components/Logos/logos/unominda.png"


const Marquee = () => {
  const image1 = [
    { src: ashok , alt: "Image 1" },
    { src: atia , alt: "Image 2" },
    { src: wipro, alt:"wipro logo"},
    {src: gabriel, alt: "Image 3" },
    { src: lumax, alt: "Image 4" },
    {src: ijl, alt: "Image 5" },
    {src: jpm, alt: "Image 6" },
    {src: koseiminda, alt: "Image 7" },
    {src: nihon, alt: "Image 8" },
    {src: nissan, alt: "Image 9" },
    {src: novaris, alt: "Image 10" },
    {src: plustech, alt: "Image 11" },
    {src: sonalika, alt: "Image 12" },
    {src: tyota, alt: "Image 13" },
    {src: suzuki, alt: "Image 14" },
    {src: tvs, alt: "Image 15" },
  ];

  const image2 = [
    { src: bajaj , alt: "Image 18" },
    { src: daifuku, alt: "Image 19" },
    { src: daimler, alt: "Image 20" },
    { src: hero, alt: "Image 21" },
    { src: mahindra, alt: "Image 22" },
    { src: matlogo, alt: "Image 23" },
    { src: musashi, alt: "Image 24" },
    { src: mindarika, alt: "Image 25" },
    { src: neelmetal, alt: "Image 26" },
    { src: neolite, alt: "Image 27" },
    {src: nissin, alt: "Image 29" },
    {src: orient, alt: "Image 28" },
    {src: parker, alt: "Image 30" },
    {src: sswl, alt: "Image 31" },
    {src: tata, alt: "Image 32" },
    {src: unominda, alt: "Image 16" },

  ];



  return (
    <div className={styles.container}>
      {[image1, image2].map((images, arrayIndex) => (
        <div key={arrayIndex} className={styles.scrollWrapper}>
          {images.map((image, index) => (
            <img key={index} src={image.src} alt={image.alt} className={styles.image} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Marquee;
