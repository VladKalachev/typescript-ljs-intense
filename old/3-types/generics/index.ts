const fs = require('fs');

interface IUser {
    name: string;
    age: number;
}

interface IProduct {
    name: string;
    price: number;
}

interface ICartProduct extends IProduct {
    count: number;
}

type TState = {
    user: IUser,
    products: IProduct[],
    cart: ICartProduct[],
}

const state: TState = {
    user: {name: 'Igor', age: 34},
    products: [{name: 'IPhone 8', price: 200}],
    cart: [{name: 'IPhone 8', price: 200, count: 2}]
}

type Select<State> = <Field extends keyof State>(state: State, field: Field) => State[Field];
const select: Select<TState> = (storeState, field) => storeState[field];

const user1: IUser = select(state, 'user');
const products: IProduct[] = select(state, 'products');
const cart: ICartProduct[] = select(state, 'cart');


function getProperty<Obj, Key extends keyof Obj>(obj: Obj, key: Key) {
    return obj[key];
}

const key = 'key1';
getProperty({a: 1}, 'b')