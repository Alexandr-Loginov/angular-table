import { IControl } from '../../../models';

export interface ITableContent {
    headers: string[];
    data: number[][];
}

export enum DefaultTableControls {
    ADD_COLUMN = 'addColumn',
    ADD_ROW = 'addRow',
}

export function getDefaultTableControls(columnHost, rowHost): IControl[] {
    return [
        {
            id: DefaultTableControls.ADD_COLUMN,
            name: 'Add column',
            host: columnHost,
        },
        {
            id: DefaultTableControls.ADD_ROW,
            name: 'Add row',
            host: rowHost,
        },
    ];
}
