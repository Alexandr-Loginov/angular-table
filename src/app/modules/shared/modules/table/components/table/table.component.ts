import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Observable, Subject } from 'rxjs';

import * as fromModels from '../../models';
import { AddColumnComponent } from '../add-column/add-column.component';
import { AddRowComponent } from '../add-row/add-row.component';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnChanges {
    @Input() public tableContent: Observable<fromModels.ITableContent[]>;

    @Output() action = new EventEmitter();

    public contentChanged: Subject<fromModels.ITableContent[]> = new Subject();

    public faTimes = faTimes;

    public defaultControls = fromModels.getDefaultTableControls(
        {
            component: AddColumnComponent,
            data: this.tableContent,
        },
        {
            component: AddRowComponent,
        }
    );

    public ngOnChanges(changes: SimpleChanges): void {
        this.contentChanged.next(changes.tableContent.currentValue);
    }

    public actionHandler(type, data) {
        this.action.emit({ type, data });
    }
}
