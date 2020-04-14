import React from 'react';
import Card from '../Card/Card';

import image from './standing-up-man-.png'

function CardPerson(props) {
    return (
        <Card type={props.type}>
            <img src={image} alt={`Person - ${props.name}`} />
            <h3>{props.name}</h3>
        </Card>
    );
}

export default CardPerson;