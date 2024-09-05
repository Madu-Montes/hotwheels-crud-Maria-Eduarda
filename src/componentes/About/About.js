import React from 'react';
import styles from './About.module.css'; 

function About() {
    return (
        <div className={styles['about-container']}>
            <h3>Este é um projeto acadêmico. Uma aplicação para CRUD de carros HotWheels.</h3>
        </div>
    );
}

export default About;
