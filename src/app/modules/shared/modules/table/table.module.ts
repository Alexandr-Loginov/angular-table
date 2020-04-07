import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import * as fromComponents from './components';

@NgModule({
    imports: [CommonModule, FontAwesomeModule, ReactiveFormsModule],
    declarations: [...fromComponents.components],
    exports: [...fromComponents.components],
    entryComponents: [...fromComponents.entryComponents],
})
export class TableModule {}
