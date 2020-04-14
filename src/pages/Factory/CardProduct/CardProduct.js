import React from 'react';
import Card from '../Card/Card';

import image from './product-realise.png';

function CardProduct(props) {
    return (
        <Card type={props.type}>
            <img src={image} alt={`Product - ${props.name}`} />
            <h3>{props.name}</h3>
        </Card>
    );
}

export default CardProduct;