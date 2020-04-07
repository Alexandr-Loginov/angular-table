import { Directive, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { first, pluck } from 'rxjs/operators';

import { ControlsComponent } from '../../components';
import { ComponentType } from '../../models';

@Directive({
    selector: '[appControlsFor]',
})
export class ControlsForDirective implements OnInit, OnDestroy {
    @Input() public appControlsFor: ComponentType;

    private controlsSubscription: Subscription;
    private contentSubscription: Subscription;

    constructor(private host: ControlsComponent) {}

    public ngOnInit(): void {
        this.appControlsFor.contentChanged.pipe(first()).subscribe((stream) => {
            this.contentSubscription = stream
                .pipe(pluck('headers'))
                .subscribe((headers) => {
                    console.log(headers);
                    this.host.data = headers;
                });
        });
        this.host.controls = this.appControlsFor.defaultControls.concat(
            this.host.controls
        );

        this.controlsSubscription = this.host.controlEvent.subscribe(
            ({ type, data }) => {
                this.appControlsFor.actionHandler(type, data);
            }
        );
    }

    public ngOnDestroy(): void {
        this.controlsSubscription.unsubscribe();
        this.contentSubscription.unsubscribe();
    }
}
