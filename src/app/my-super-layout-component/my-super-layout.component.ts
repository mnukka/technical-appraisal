import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-my-super-layout-component',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './my-super-layout.component.html',
})
export class MySuperLayoutComponent {

}
