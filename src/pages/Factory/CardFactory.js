import React from 'react';

import CardProduct from './CardProduct/CardProduct';
import CardPerson from './CardPerson/CardPerson';

function CardFactory(props) {
    switch (props.type) {
        case 'person':
            return <CardPerson {...props} />;
        case 'product':
            return <CardProduct {...props} />;
        default:
            return <CardPerson {...props} />;
    }
}

export default CardFactory;