import { ContainerType } from '../modules/shared/models';
import { AppComponent } from './app/app.component';
import { ContentComponent } from './content/content.component';

export const containers: ContainerType[] = [ContentComponent, AppComponent];

export * from './app/app.component';
export * from './content/content.component';
