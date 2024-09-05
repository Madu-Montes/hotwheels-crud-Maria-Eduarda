// src/componentes/NavBar/NavBar.js
import React from 'react';
import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">Sobre</a></li>
                <li><a href="/cars">Carros</a></li>
                <li><a href="/add-car">Add Carro</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;
