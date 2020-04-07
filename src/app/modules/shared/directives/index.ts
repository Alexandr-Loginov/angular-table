import { DirectiveType } from '../models';
import { ControlHostDirective } from './control-host/control-host.directive';
import { ControlsForDirective } from './controls-for/controls-for.directive';

export const directives: DirectiveType[] = [
    ControlHostDirective,
    ControlsForDirective,
];

export * from './control-host/control-host.directive';
export * from './controls-for/controls-for.directive';
