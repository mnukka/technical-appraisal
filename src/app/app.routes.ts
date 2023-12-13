import {Routes} from '@angular/router';
import {MySuperLayoutComponent} from "./my-super-layout-component/my-super-layout.component";

export const routes: Routes = [
  {
    path: '',
    component: MySuperLayoutComponent,
    children: []
  },
];

