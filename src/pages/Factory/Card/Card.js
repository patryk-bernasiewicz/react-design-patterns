import React from 'react';
import './Card.css';

function Card({ type, children }) {
    return (
        <div className={`card card--${type}`}>
            <div className="card__type">This is a {type} card</div>
            {children}
        </div>
    )
}

export default Card;