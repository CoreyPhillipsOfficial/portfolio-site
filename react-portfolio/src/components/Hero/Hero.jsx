import React, { useState } from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);


  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Corey</h1>
        <p className={styles.description}>
          I'm a full-stack developer with experience using MongoDB, Express,
          REACT and Node.js. You can find some of my projects down below!
        </p>

        <a href="mailto:coreytphillips@icloud.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>

      {/* <img
        src={getImageUrl("hero/corey-profile-picture.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      /> */}

      {/* Image with loading state */}
      <div className={styles.heroImgWrapper}>
        {!isImageLoaded && <div className={styles.imageSkeleton}></div>}
        <picture>
          <source
            srcSet={getImageUrl("hero/corey-profile-picture.avif")}
            type="image/avif"
          />
          <source
            srcSet={getImageUrl("hero/corey-profile-picture.webp")}
            type="image/webp"
          />
          <img
            src={getImageUrl("hero/corey-profile-picture.png")}
            alt="Hero image of me"
            className={`${styles.heroImg} ${isImageLoaded ? styles.visible : styles.hidden
              }`}
            onLoad={() => setIsImageLoaded(true)}
          />
        </picture>
      </div>

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
