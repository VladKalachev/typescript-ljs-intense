// Object/Function

// interface IPoint {
//     x: number;
//     y: number;
// }
//
// type TPoint = {
//     x: number;
//     y: number;
// }
//
// let p1: TPoint = {
//     x: 1, y: 1
// }
//
// interface ISetPoint {
//     new (x: number, y: number): void;
// }
//
// type TSetPoint =  new  (x: number, y: number) => void;


// Extend
type PartialPoint = {
    x: number;
}

interface IPartialPoint {
    y: number;
}

//type Point = PartialPoint & IPartialPoint

interface Point extends PartialPoint, IPartialPoint {

}

let p1: Point = {
    x: 1, y: 1
}


// implements >2.1 ...
class BasePoint implements PartialPoint, IPartialPoint, snd {
    public x: number = 10;
    public y: number = 10;
}

//
// const user: TAccount = {
//     name: 'Andrew',
//     age: 32
// }
//
//
// interface TAccount1 {
//     name: string;
//     info: { male: boolean }
// }
//
// interface TAccount2 {
//     age: number;
//     info: { salary: number }
// }
//
// interface IAccount extends TAccount1, TAccount2 {
//     info: { male: boolean, salary: number }
// }


interface TAccount {
    name: string;
}

interface TAccount {
    age: number;
}

class Acc implements TAccount {
    public name: string = 'Andrew';
    public age: number = 22;
}