import React from 'react';
import styles from "./Team.module.css";

const Team = ( props ) => {
  return (
    <div className={styles.container}>
      <img src={props.memimage} alt={props.name} className={styles.memimage} />
      <div className={styles.overlay}>
        <div className={styles.membername}>
          <p>{props.name}</p>
          <hr />
        </div>
        <div className={styles.memberrole}>
          <p className={styles.new}>{props.role}</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
