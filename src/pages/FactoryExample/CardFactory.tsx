import React from 'react';

import ProductCard, { Props as ProductCardProps } from './ProductCard/ProductCard';
import PersonCard, { Props as PersonCardProps } from './PersonCard/PersonCard';

class CardFactory {
    static createCard(props: PersonCardProps|ProductCardProps): JSX.Element {
        switch (props.type) {
            default:
            case 'person':
                {
                    const propNames = ['type', 'name', 'age'];
                    const passedProps = CardFactory.filterProps<PersonCardProps>(props, propNames);
                    return <PersonCard {...passedProps} />;
                }
            case 'product':
                {
                    const propNames = ['type', 'name', 'price'];
                    const passedProps = CardFactory.filterProps<ProductCardProps>(props, propNames);
                    return <ProductCard {...passedProps} />;
                }
        }
    }

    static filterProps<T>(props: PersonCardProps|ProductCardProps, propNames: string[]): T {
        const obj: { [x: string]: string|number } = {};
        propNames.forEach((propName: string) => obj[propName] = props[propName]);
        return obj as unknown as T;
    }
}

export default CardFactory;