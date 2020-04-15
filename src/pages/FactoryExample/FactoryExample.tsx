import React, { Fragment } from 'react';
import CardFactory from './CardFactory';

import { Item } from './item.interface';

const items: Item[] = [
    { type: 'person', name: 'Keanu Reeves', age: 55 },
    { type: 'product', name: 'Shampoo', price: 4.99 },
    { type: 'product', name: 'Cheese', price: 2.49 }
];

function FactoryExample(): JSX.Element {
    return (
        <Fragment>
            {items.map(item => (
                <Fragment key={item.name}>
                    {CardFactory(item)}
                </Fragment>
            ))}
        </Fragment>
    );
}

export default FactoryExample;