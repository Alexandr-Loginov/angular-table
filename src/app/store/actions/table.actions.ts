import { createAction, props } from '@ngrx/store';

export const addRow = createAction(
    '[Table] AddRow',
    props<{ row: number[] }>()
);

export const removeRow = createAction(
    '[Table] RemoveRow',
    props<{ id: number }>()
);

export const addColumn = createAction(
    '[Table] AddColumn',
    props<{ column: string; defaultValue?: number }>()
);

export const removeColumn = createAction(
    '[Table] RemoveColumn',
    props<{ id: number }>()
);

export const removeOperation = createAction('[Table] RemoveRow');

export const displaySum = createAction('[Table] DisplaySum');

export const displayMultiply = createAction('[Table] DisplayMultiply');
