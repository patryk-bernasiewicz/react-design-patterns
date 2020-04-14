import React, { Fragment } from 'react';
import CardFactory from './CardFactory';

const items = [
    { type: 'person', name: 'Keanu Reeves' },
    { type: 'product', name: 'Shampoo' },
    { type: 'product', name: 'Cheese' }
];

function Factory() {
    return items.map(item => (
        <Fragment key={item.name}>
            {CardFactory(item)}
        </Fragment>
    ));
}

export default Factory;