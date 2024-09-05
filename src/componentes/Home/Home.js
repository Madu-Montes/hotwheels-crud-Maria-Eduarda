import React from 'react';
import styles from './Home.module.css'; 
import homeImage from '../images/homeImage.webp'; 

function Home() {
    return (
        <div className={styles['home-container']}>
            <h1>Olá, mundo! Sejam bem-vindos</h1>
            <img src={homeImage} alt="Home" className={styles['home-image']} />
        </div>
    );
}

export default Home;
