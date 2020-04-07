import { IControl } from '../modules/shared/models';

export enum CustomControls {
    SUM = 'sum',
    MULTIPLY = 'multiply',
}

export function defaultHandler() {
    return this.id;
}

export const customControlsSettings: IControl[] = [
    {
        id: CustomControls.SUM,
        name: 'Display sum',
        handler: defaultHandler,
    },
    {
        id: CustomControls.MULTIPLY,
        name: 'Display multiply',
        handler: defaultHandler,
    },
];
