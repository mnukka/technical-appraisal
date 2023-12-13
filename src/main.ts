import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import {MySuperLayoutComponent} from "./app/my-super-layout-component/my-super-layout.component";

bootstrapApplication(MySuperLayoutComponent, appConfig)
  .catch((err) => console.error(err));
