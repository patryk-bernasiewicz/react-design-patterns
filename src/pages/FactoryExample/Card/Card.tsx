import React from 'react';
import './Card.css';

export interface Props {
    type: string;
    children: (0 | JSX.Element | undefined)[];
}

function Card({ type, children }: Props): JSX.Element {
    return (
        <div className={`card card--${type}`}>
            <div className="card__type">This is a {type} card</div>
            {children}
        </div>
    )
}

export default Card;