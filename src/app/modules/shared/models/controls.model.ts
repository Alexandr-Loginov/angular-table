import { IControlComponent } from './entity.model';

export interface IControl {
    id: string;
    name: string;
    handler?: () => any;
    host?: IControlComponent;
}
