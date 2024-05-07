import React from 'react';

import styles from './Hero.module.css'
import { getImageUrl } from '../../utils';

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Corey</h1>
                <p className={styles.description}>
                    I'm a full-stack developer with experience using MongoDB, Express, REACT and Node.js. You can find some of my projects down below!
                </p>
                <a href="mailto:coreytphillips@icloud.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl('hero/circular-portrait-corey.png')} alt='Hero image of me' className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
}