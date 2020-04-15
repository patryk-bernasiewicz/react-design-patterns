import React from 'react';
import Card from '../Card/Card';

import image from './product-placeholder.png';

export interface Props {
    [x: string]: string|number;
    type: string;
    name: string;
    price: number;
}

function formatPrice(price: number): string {
    return '$' + price.toString().replace('.', ',');
}

function ProductCard({ type, name, price }: Props): JSX.Element {
    return (
        <Card type={type}>
            <img src={image} alt={`Product - ${name}`} />
            <h3>{name}</h3>
            <div>{formatPrice(price)}</div>
        </Card>
    );
}

export default ProductCard;