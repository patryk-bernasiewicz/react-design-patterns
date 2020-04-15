import React from 'react';
import Card from '../Card/Card';

import image from './product-realise.png';

interface Props {
    type: string;
    name: string;
    price?: number;
}

function formatPrice(price: number): string {
    return price.toString().replace('.', ',');
}

function ProductCard(props: Props): JSX.Element {
    return (
        <Card type={props.type}>
            <img src={image} alt={`Product - ${props.name}`} />
            <h3>{props.name}</h3>
            {props.price && (
                <div>{formatPrice(props.price)}</div>
            )}
        </Card>
    );
}

export default ProductCard;