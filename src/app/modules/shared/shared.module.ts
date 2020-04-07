import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import * as fromComponents from './components';
import * as fromDirectives from './directives';
import { ControlsForDirective } from './directives/controls-for/controls-for.directive';
import { TableModule } from './modules/table/table.module';

@NgModule({
    imports: [CommonModule, TableModule],
    declarations: [
        ...fromComponents.components,
        ...fromDirectives.directives,
        ControlsForDirective,
    ],
    exports: [
        ...fromComponents.components,
        ...fromDirectives.directives,
        TableModule,
    ],
})
export class SharedModule {}
