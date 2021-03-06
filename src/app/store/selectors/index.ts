import { createSelector } from '@ngrx/store';

import { CustomControls } from '../../models';
import { ITableState } from '../reducers';

export const tableSelect = (state) => state.table;

export const tableContent = createSelector(
    tableSelect,
    (state: ITableState) => {
        return addCounter(state.counter, state.tableContent);
    }
);

export const operated = createSelector(tableSelect, (state: ITableState) => {
    return !!state.counter;
});

function addCounter(type, table) {
    switch (type) {
        case CustomControls.SUM:
            let sum;
            sum = table.data.reduce((r, a) => {
                a.forEach((b, i) => {
                    r[i] = (r[i] || 0) + b;
                });
                return r;
            }, []);
            return {
                headers: table.headers,
                data: table.data.length ? table.data.concat([sum]) : table.data,
            };
        case CustomControls.MULTIPLY:
            let mult;
            mult = table.data.reduce((r, a) => {
                a.forEach((b, i) => {
                    r[i] = (r[i] || 1) * (b || 1);
                });
                return r;
            }, []);
            return {
                headers: table.headers,
                data: table.data.length
                    ? table.data.concat([mult])
                    : table.data,
            };
        default:
            return table;
    }
}
