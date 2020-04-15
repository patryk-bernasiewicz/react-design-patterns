import React from 'react';
import { Link } from 'react-router-dom';
import './MainMenu.css';

function MainMenu(): JSX.Element {
    return (
        <nav className="MainMenu">
            <ul className="MainMenu__list">
                <li className="MainMenu__item">
                    <Link to="/" className="MainMenu__link">Home</Link>
                </li>
                <li className="MainMenu__item">
                    <Link to="/factory" className="MainMenu__link">Factory</Link>
                </li>
            </ul>
        </nav>
    );
}

export default MainMenu;