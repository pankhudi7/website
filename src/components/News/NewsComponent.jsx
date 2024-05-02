import React from 'react';
import styles from './NewsComponent.module.css';
import image from "../../resources/About2.jpg"

const NewsComponent = () => {
  const newsItems = [
    {
      imageSrc: image,
      title: 'News 1',
      description: 'Description for News 1',
    },
    {
      imageSrc: image,
      title: 'News 2',
      description: 'Description for News 2',
    },
    {
      imageSrc: image,
      title: 'News 3',
      description: 'Description for News 3',
    },
    {
      imageSrc: image,
      title: 'News 4',
      description: 'Description for News 4',
    }
  ];

  return (
    <div>
    <div className={styles.smallNewsContainer}>
        <div className={styles.smallNews}>
          <div className={styles.smallImage}><img src='' alt='news'/> </div>
          <div className={styles.newsText}>Small News 1</div>
        </div>
        <div className={styles.smallNews}>
          <div className={styles.smallImage}><img src='' alt='news'/> </div>
          <div className={styles.newsText}>Small News 2</div>
        </div>
        <div className={styles.smallNews}>
          <div className={styles.smallImage}><img src='' alt='news'/>  </div>
          <div className={styles.newsText}>Small News 3</div>
        </div>

      </div>
    <div className={styles.newsContainer}>
      {newsItems.map((item, index) => (
        <div className={styles.card} key={index}>
          <img className={styles.newsimage} src={item.imageSrc} alt={item.title} />
          <div className={styles.content}>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.description}>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
    </div>

  );
}

export default NewsComponent;
