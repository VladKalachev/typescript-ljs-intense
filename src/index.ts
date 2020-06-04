// virtual - real

interface UserAccount {
    name: string;
    age: number;
}

let person1: UserAccount = UserAccount;

let userAccount = {
    name: 'Igor',
    age: 34
}

let person2: typeof userAccount = {
    name: 'Andrew',
    age: 21
};

class Point {
    public x = 10;
}

let p: Point = new Point();


let num = 'sd';

num = 1;