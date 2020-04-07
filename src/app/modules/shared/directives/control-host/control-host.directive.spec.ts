import { ViewContainerRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { ControlHostDirective } from './control-host.directive';

describe('ControlHostDirective', () => {
    let viewContainerRef: ViewContainerRef;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ViewContainerRef],
        });

        viewContainerRef = TestBed.get(ViewContainerRef);
    });

    it('should create an instance', () => {
        const directive = new ControlHostDirective(viewContainerRef);
        expect(directive).toBeTruthy();
    });
});
