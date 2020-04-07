import { ActionReducerMap, createReducer, MetaReducer, on } from '@ngrx/store';

import { CustomControls } from '../../models';
import { ITableContent } from '../../modules/shared/modules/table/models';
import * as fromActions from '../actions/table.actions';

export const tableFeatureKey = 'table';

export interface ITableState {
    tableContent: ITableContent;
    counter: CustomControls;
}

export interface State {
    table: ITableState;
}

export const initialState = {
    tableContent: {
        headers: ['customer', 'profit/customer'],
        data: [
            [5, 3.14],
            [12, 6.27],
        ],
    },
    counter: null,
};

const tableReducer = createReducer(
    initialState,
    on(fromActions.addRow, (state, { row }) => ({
        ...state,
        tableContent: {
            ...state.tableContent,
            data: [...state.tableContent.data, row],
        },
    })),
    on(fromActions.addColumn, (state, { column, defaultValue }) => ({
        ...state,
        tableContent: {
            headers: [...state.tableContent.headers, column],
            data: state.tableContent.data.map((row) => [
                ...row,
                defaultValue || 0,
            ]),
        },
    })),
    on(fromActions.removeRow, (state, { id }) => {
        state.tableContent.data.splice(id, 1);
        return {
            ...state,
            tableContent: {
                ...state.tableContent,
                data: [...state.tableContent.data],
            },
        };
    }),
    on(fromActions.removeColumn, (state, { id }) => {
        state.tableContent.headers.splice(id, 1);
        return {
            ...state,
            tableContent: {
                headers: [...state.tableContent.headers],
                data: state.tableContent.data.map((row) => {
                    row.splice(id, 1);
                    return row;
                }),
            },
        };
    }),
    on(fromActions.displaySum, (state) => ({
        ...state,
        counter: CustomControls.SUM,
    })),
    on(fromActions.displayMultiply, (state) => ({
        ...state,
        counter: CustomControls.MULTIPLY,
    })),
    on(fromActions.removeOperation, (state) => ({
        ...state,
        counter: null,
    }))
);

export const reducers: ActionReducerMap<State> = {
    table: tableReducer,
};

export const metaReducers: MetaReducer<ITableState>[] = [];
