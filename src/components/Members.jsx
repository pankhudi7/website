import React from "react";
import Team from "./Team";
import styles from "./Members.module.css";
import pramod from "../../resources/PRAMOD.jpeg"
import TextComponent from "../Heading/TextComponent";
// import member2 from "../../resources/ken.jpg"

function Members() {
  return (
    <>
      <div class={styles.background}>
        <h2> Leadership Team</h2>
        <div class={styles.paragraph}>
          Meet the leadership team driving Technavias' commitment to excellence
        </div>
      </div>
      <div class={styles.members}>
        <div class={styles.memberspacing}>
          <Team memimage ={pramod} name="Pramod Kumar Yadav" role="CEO" />
        </div>
        <div class={styles.memberspacing}>
          <Team name="Kenichi Imamura" role="President" />
        </div>
        <div class={styles.memberspacing}>
          <Team name="Abhishek Suroliya" role="Head of Sales" />
        </div>
        <div class={styles.memberspacing}>
          <Team name="Vipul Pratap Singh" role="Head of Operations" />
        </div>
      </div>
    </>
  );
}

export default Members;
