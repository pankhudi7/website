import React from 'react';
import Product from './Product';
import styles from "./Machines.module.css";
import first from "../../resources/vertax-horax.jpg"
import second from "../../resources/technafeeder.jpg"
import third from "../../resources/scada-system.jpg"
import fourth from "../../resources/technaslink.jpg"
import fifth from "../../resources/bell_cleaner.png"
import six from "../../resources/pigging-system.jpg"
import seven from "../../resources/products_dozing.png"
import last from "../../resources/color.jpg"

const Machine = () => {
  const machines = [
    { id: 1, imageUrl: first, heading: 'VERTEX' },
    { id: 2, imageUrl: second, heading: 'TECHNAFEEDER' },
    { id: 3, imageUrl: first, heading: 'TECHNAVIEW' },
    { id: 4, imageUrl: first, heading: 'TECHNASLINK' },
    { id: 5, imageUrl: first, heading: 'BELL CLEANER' },
    { id: 6, imageUrl: first, heading: 'PIGGING SYSTEM' },
    { id: 7, imageUrl: first, heading: 'DOSING UNIT' },
    { id: 8, imageUrl: first, heading: 'COLOUR CHANGING UNIT' },
    // Add more machines as needed
  ];

  return (
    <div className={styles.maincontainer}>
    <div className={styles.mainprcontainer}>
      <div className={styles.productlog}>
        {machines.map(machine => (
          <div className={styles.producttag}>
          <Product key={machine.id} id={machine.id} imageUrl={machine.imageUrl} heading={machine.heading}/>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Machine;

// const Machine = () => {
//   const machines = [
//     { id: 1, imageUrl: first, heading: 'VERTEX' },
//     { id: 2, imageUrl: second, heading: 'TECHNAFEEDER' },
//     { id: 3, imageUrl: third, heading: 'TECHNAVIEW' },
//     { id: 4, imageUrl: fourth, heading: 'TECHNASLINK' },
//     { id: 5, imageUrl: fifth, heading: 'BELL CLEANER' },
//     { id: 6, imageUrl: six, heading: 'PIGGING SYSTEM' },
//     { id: 7, imageUrl: seven, heading: 'DOSING UNIT' },
//     { id: 8, imageUrl: last, heading: 'COLOUR CHANGING UNIT' },
//     // Add more machines as needed
//   ];

//   return (
//     <div className={styles.mainprcontainer}>

//       <div className={styles.productlog}>
//       {machines.map(machine => (
//         <div className={styles.producttag}>
//         <Product key={machine.id} id={machine.id} imageUrl={machine.imageUrl} heading={machine.heading} />
//         </div>
//       ))}
//     </div>
//     </div>
//   );
// };

// export default Machine;