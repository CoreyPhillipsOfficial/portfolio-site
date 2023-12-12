import React from "react";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return <footer>
        <div>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul>
            <li>
                <img src={getImageUrl('contact/emailIcon.png')} alt="Email icon" />
                <a href="mailto:coreytphillips@icloud.com">Email</a>
            </li>
            <li>
                <img src={getImageUrl('contact/linkedinIcon.png')} alt="LinkedIn icon" />
                <a href="https://www.linkedin.com/in/coreyphillipslinked/">LinkedIn</a>
            </li>
            <li>
                <img src={getImageUrl('contact/githubIcon.png')} alt="Github icon" />
                <a href="https://github.com/CoreyPhillipsOfficial">Github</a>
            </li>
        </ul>
    </footer>;
}