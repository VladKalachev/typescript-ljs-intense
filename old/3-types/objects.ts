const user: {
    readonly firstName: string,
    readonly age?: number
} = {
    firstName: 'Igor',
    age: 34
}

user.firstName = 'Andrew';
user.age = 32;

interface IACC  {
    readonly firstName: string,
    readonly age?: number;
}

let keys: keyof typeof user = 1;
let value: (typeof user)['firstName' | 'age'] = true;

//
// let hashMap: { [id: string]: typeof user } = {
//     'asdasd123124asda': user,
//     'asd1231241': user,
//     'asdasd1231': user,
// }


// let arr: ReadonlyArray<number> = [1, 2, 3, 4];
// let arr: readonly number[] = [1, 2, 3, 4];

// arr[100] = 12;
// arr.push(12);
//
// let tupleArr: readonly [string, number] = ['name', 1];
// tupleArr[100] = 12;
// tupleArr.push(12);
//
// let str = 'const string' as const;
// let a: typeof str = 'asdasd';

let arr = [1, 2, 3, 4] as const;

let user1 = {
    firstName: 'Igor',
    age: 34
} as const;

user1.age = 33;