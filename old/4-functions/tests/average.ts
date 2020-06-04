export type sn = string | number

export function isString(item: sn): item is string {
    return typeof item === 'string';
}


export function average(a: string, b: string): string;
export function average(a: string, b: number, c: number): string;
export function average(a: number, b: string): string;
export function average(...items: sn[]): string {
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