import { ComponentType } from '../../../models';
import { AddColumnComponent } from './add-column/add-column.component';
import { AddRowComponent } from './add-row/add-row.component';
import { TableComponent } from './table/table.component';

export const components: ComponentType[] = [
    AddColumnComponent,
    AddRowComponent,
    TableComponent,
];

export const entryComponents: ComponentType[] = [
    AddColumnComponent,
    AddRowComponent,
];

export * from './add-column/add-column.component';
export * from './add-row/add-row.component';
export * from './table/table.component';
