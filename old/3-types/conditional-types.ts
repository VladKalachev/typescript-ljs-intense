// T extends U ? X : Y

// type nonUndefined<T> =  T extends undefined ? never : T;
//
// const value: nonUndefined<string | undefined | number> = true

// type excludeFactID<T> = T extends 'factId' ? never : T;
//
// interface IFact {
//     factId: number;
//     user: any;
//     value: string
// }
//
// const value: excludeFactID<keyof IFact> = 'value';
interface IUser {
    name: string;
    age: number;
}
// const arr: [() => IUser, () => number | null] = [() => ({name: 'Andrew', age: 33}), () => null];
//
// type FirstElementReturnType<T> = T extends [infer U, ...unknown[]]
//     ? U extends (...args: unknown[]) => infer R
//         ? R : never
//     : never;
//
// let value: FirstElementReturnType<typeof arr> = 1;

function fn(_a: number, _b: IUser): boolean {
    return true
}

type NonFunction<T> = T extends Function ? never : T;

type FunctionsParamsAndReturn<T> = T extends (...args: infer Args) => infer R
    ? NonFunction<Args[keyof Args]> | R
    : never

const val1: FunctionsParamsAndReturn<typeof fn> = Symbol();

let a: Exclude<any, any>


export enum MeterGeneralAction {
    RmdConnect = 'Connect',
    RmdDisconnect = 'RmdDisconnect',
}

export enum MeterGroupAction {
    InsertGroup = 'InsertGroup',
    AddToGroup = 'AddToGroup',
}

export enum MeterTaskAction {
    InitBaseSwap = 'InitBaseSwap',
    InitRegisterSwap = 'InitBaseSwap',
}

export type MeterActionsType = MeterGeneralAction | MeterGroupAction | MeterTaskAction

const meterActions = {
    'General': MeterGeneralAction,
    'Group': MeterGroupAction,
    'Tasks': MeterTaskAction,
}

function performMeterAction({name: action}: { name: MeterActionsType }) {
    let isSwap: boolean = false;
    let swapType: number | null = null;
    switch (action) {
        case MeterTaskAction.InitBaseSwap: {
            isSwap = true;
            swapType = 0;
            return;
        }
        case MeterTaskAction.InitRegisterSwap: {
            isSwap = true;
            swapType = 0;
            return;
        }
    }
    componentLookup(action);
}

function componentLookup(_type: Exclude<MeterActionsType, MeterTaskAction>) {
}