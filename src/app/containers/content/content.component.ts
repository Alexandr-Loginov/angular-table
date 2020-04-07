import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, zip } from 'rxjs';
import { first } from 'rxjs/operators';

import { customControlsSettings } from '../../models';
import { IControl } from '../../modules/shared/models';
import { ITableContent } from '../../modules/shared/modules/table/models';
import * as fromActions from '../../store/actions/table.actions';
import { State } from '../../store/reducers';
import { operated, tableContent } from '../../store/selectors';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
    public tableContent: Observable<ITableContent> = this.store.select(
        tableContent
    );
    public customControls: IControl[] = customControlsSettings;

    constructor(private store: Store<State>) {}

    public actionHandler({ type, data }): void {
        switch (type) {
            case 'removeRow': {
                zip(this.store.select(operated), this.tableContent)
                    .pipe(first())
                    .subscribe((x) => {
                        if (x[0] && x[1].data.length === data) {
                            this.store.dispatch(fromActions.removeOperation());
                        } else {
                            this.store.dispatch(
                                fromActions.removeRow({ id: data })
                            );
                        }
                    });
                break;
            }
            case 'removeColumn': {
                this.store.dispatch(fromActions.removeColumn({ id: data }));
                break;
            }
            case 'addRow': {
                this.store.dispatch(fromActions.addRow(data));
                break;
            }
            case 'sum': {
                this.store.dispatch(fromActions.displaySum());
                break;
            }
            case 'multiply': {
                this.store.dispatch(fromActions.displayMultiply());
                break;
            }
            case 'addColumn': {
                this.store.dispatch(
                    fromActions.addColumn({
                        column: data.column,
                        defaultValue: data.defaultValue,
                    })
                );
                break;
            }
        }
    }
}
