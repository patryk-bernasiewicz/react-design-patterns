import React from 'react';
import Card from '../Card/Card';

import image from './person-placeholder.png';

export interface Props {
    [x: string]: string|number;
    type: string;
    name: string;
    age: number;
}

function CardPerson({ type, name, age }: Props): JSX.Element {
    return (
        <Card type={type}>
            <img src={image} alt={`Person - ${name}`} />
            <h3>{name}</h3>
            <div>({age} years old)</div>
        </Card>
    );
}

export default CardPerson;