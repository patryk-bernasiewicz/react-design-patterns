import React from 'react';

import ProductCard from './ProductCard/ProductCard';
import CardPerson from './CardPerson/CardPerson';

import { Item } from './item.interface';

function CardFactory(props: Item): JSX.Element {
    switch (props.type) {
        case 'person':
            return <CardPerson {...props} />;
        case 'product':
            return <ProductCard {...props} />;
        default:
            return <CardPerson {...props} />;
    }
}

export default CardFactory;