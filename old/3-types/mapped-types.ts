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