import React from 'react';
import Card from '../Card/Card';

import image from './standing-up-man-.png';

export interface Props {
    type: string;
    name: string;
}

function CardPerson({ type, name }: Props): JSX.Element {
    return (
        <Card type={type}>
            <img src={image} alt={`Person - ${name}`} />
            <h3>{name}</h3>
        </Card>
    );
}

export default CardPerson;