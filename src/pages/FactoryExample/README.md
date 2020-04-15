# Factory Pattern

The `Factory` is a simple pattern that allows us to create various instances of different classes without necessarily knowing what kind of instance we need at the moment or how exactly it is created. All we need to know is the type of data the `Factory` class expects from us, and all the underlying procedures are taken care of by it's static methods.

## Factory's static methods

The `Factory` pattern is usually implemented by specyfying a static method for a Factory-type class. From that static method, we can either retrieve a newly created or a cached instance of object that the metod decided to return to us.

In React, we can use the `Factory` pattern to create a function/class that will be responsible of creating different kind of components for us, without even caring for how it works internally.

In the example provided with the project, we use a Factory Method pattern to create a class, which returns a specific Component instance, based on the `type` prop.

```tsx
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
```

In the above example, a list containing 1 `PersonCard` component and 2 `ProductCard` components will be rendered, because we looped through an array, containing 1 object with `type` "person" and 2 objects with `type` "product".

```
> App
    > FactoryExample
        > PersonCard
        > ProductCard
        > ProductCard
```

Our `CardFactory.createCard` static method decided for us which component to render.