import { createSelector } from '@ngrx/store';
import { CustomControls } from 'src/app/models';

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
            console.log(table);
            sum = table.data.reduce((r, a) => {
                a.forEach((b, i) => {
                    r[i] = (r[i] || 0) + b;
                });
                return r;
            }, []);
            return {
                headers: table.headers,
                data: table.data.concat([sum]),
            };
        case CustomControls.MULTIPLY:
            let mult;
            console.log(table);
            mult = table.data.reduce((r, a) => {
                a.forEach((b, i) => {
                    r[i] = (r[i] || 1) * (b || 1);
                });
                return r;
            }, []);
            return {
                headers: table.headers,
                data: table.data.concat([mult]),
            };
        default:
            return table;
    }
}
