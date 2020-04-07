import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { appRoutes } from './app.routes';
import * as fromContainers from './containers';
import { SharedModule } from './modules/shared/shared.module';
import { reducers } from './store/reducers';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        SharedModule,
        StoreModule.forRoot(reducers),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: true,
        }),
    ],
    declarations: [...fromContainers.containers],
    providers: [],
    bootstrap: [fromContainers.AppComponent],
})
export class AppModule {}
