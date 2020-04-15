import React, { Fragment } from 'react';
import CardFactory from './CardFactory';

import { Props as ProductCardProps } from './ProductCard/ProductCard';
import { Props as PersonCardProps } from './PersonCard/PersonCard';

const items: (PersonCardProps|ProductCardProps)[] = [
    { type: 'person', name: 'Keanu Reeves', age: 55 },
    { type: 'product', name: 'Shampoo', price: 4.99 },
    { type: 'product', name: 'Cheese', price: 2.49 }
];

function FactoryExample(): JSX.Element {
    return (
        <Fragment>
            {items.map((item: PersonCardProps|ProductCardProps) => (
                <Fragment key={item.name}>
                    {CardFactory.createCard(item)}
                </Fragment>
            ))}
        </Fragment>
    );
}

export default FactoryExample;