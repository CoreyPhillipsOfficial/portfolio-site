import React from 'react';
import { getImageUrl } from '../../utils';

export const About = () => {
    return (
        <section>
            <h2>About</h2>
            <div>
                <img src={getImageUrl('about/aboutImage.png')} alt="Me sitting with a laptop"
                />
                <ul>
                    <li><img src={getImageUrl('about/cursonIcon.png')} alt="Cursor icon" /></li>
                </ul>
            </div>
        </section>
    );
};