import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
    project: { title, imageSrc, description, skills, demo, source },
}) => {
    return (
        <div className={styles.container}>
            <a href={demo} target='_blank' rel='noopener noreferrer'>
                <img
                    src={getImageUrl(imageSrc)}
                    alt={`Image of ${title}`}
                    className={styles.image}
                />
            </a>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {skills.map((skill, id) => {
                    return (
                        <li key={id} className={styles.skill}>
                            {skill}
                        </li>
                    );
                })}
            </ul>
            <div className={styles.links}>
                <a href={demo} className={styles.link} target='_blank' rel='noopener noreferrer'>
                    Link
                </a>
                {source && (
                    <a href={source} className={styles.link} target='_blank' rel='noopener noreferrer'>
                        Source
                    </a>
                )}
            </div >
        </div >
    );
};