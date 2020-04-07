import {
    Component,
    ComponentFactory,
    ComponentFactoryResolver,
    ComponentRef,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { ControlHostDirective } from '../../directives/control-host/control-host.directive';
import { ComponentType, IControl, IControlComponent } from '../../models';

@Component({
    selector: 'app-controls',
    templateUrl: './controls.component.html',
    styleUrls: ['./controls.component.scss'],
})
export class ControlsComponent implements OnInit {
    @Input() public controls: IControl[] = [];
    public data: any;

    @Output() public controlEvent = new EventEmitter();

    @ViewChild(ControlHostDirective, { static: true })
    public controlHost: ControlHostDirective;

    private currentControlId: string;
    private componentRef: ComponentRef<ComponentType>;
    private onSubmit: Subscription;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

    ngOnInit() {}

    public handleControl(control: IControl): void {
        if (control.host) {
            if (this.currentControlId !== control.id) {
                this.componentRef = this.loadComponent(control.host);
                this.currentControlId = control.id;
            } else {
                this.componentRef.destroy();
                this.componentRef = null;
                this.currentControlId = null;
                this.onSubmit.unsubscribe();
            }
        }
        if (typeof control.handler === 'function') {
            this.controlEvent.emit({ type: control.handler(), data: null });
        }
    }

    private loadComponent(
        host: IControlComponent
    ): ComponentRef<ComponentType> {
        const componentFactory: ComponentFactory<ComponentType> = this.componentFactoryResolver.resolveComponentFactory(
            host.component
        );

        const viewContainerRef: ViewContainerRef = this.controlHost
            .viewContainerRef;
        viewContainerRef.clear();

        const componentRef: ComponentRef<ComponentType> = viewContainerRef.createComponent(
            componentFactory
        );
        componentRef.instance.data = this.data || host.data;
        this.onSubmit = componentRef.instance.controlResult
            .pipe(first())
            .subscribe((result) => {
                this.controlEvent.emit(result);
                componentRef.destroy();
                this.componentRef = null;
                this.onSubmit = null;
                this.currentControlId = null;
            });
        return componentRef;
    }
}
