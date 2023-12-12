import React from "react";

import projects from '../../data/projects.json';

export const Projects = () => {
    return <section>
        <h2>Projects</h2>
        <div>
            {
                projects.map((project, id) => {
                    return
                })
            }
        </div>
    </section>;
}