// function average(a: number, b: number, c: number): string {
//     const avg: number = (a + b + c) / 3;
//     return `Avg is ${avg}`;
// }

// function average(a: number, b?: number, c?: number): string {
//     if (b === undefined) {
//         b = 0;
//     }
//     if (c === undefined) {
//         c = 0;
//     }
//     const avg: number = (a + b + c) / 3;
//     return `Avg is ${avg}`;
// }

// function average(a: number, b: number = 0, c: number = 0): string {
//     const avg: number = (a + b + c) / 3;
//     return `Avg is ${avg}`;
// }
// type sn = string | number
//
// function isString(item: sn): item is any[] {
//     return typeof item === 'string';
// }
//
// function average(...items: sn[]): string {
//     let total: number = 0;
//     for (const item of items) {
//         if (isString(item)) {
//             total += Number(item);
//             continue;
//         }
//         total += item;
//     }
//     const avg: number = total / items.length;
//     return `Avg is ${avg}`;
// }

type sn = string | number

function isString(item: sn): item is string {
    return typeof item === 'string';
}


function average(a: string, b: string): string;
function average(a: string, b: number, c: number): string;
function average(a: number, b: string): string;
function average(...items: sn[]): string {
    let total: number = 0;
    for (const item of items) {
        if (isString(item)) {
            total += Number(item);
            continue;
        }
        total += item;
    }
    const avg: number = total / items.length;
    return `Avg is ${avg}`;
}


average('1', '2');
average('1', 1, 1);
average(1, 's');

average(1);
average(1, 2);
average(1, '2', 3);
average(1, '2', 3, 45);
average(1, 2, 3, 45);
average(1, 2, 3, 45, 34, 44, 4, 4, 4);
const n: number = average(1, 2, 3);

let arr: Array