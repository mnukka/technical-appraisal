import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterOutlet} from "@angular/router";
import {HelloWorldModule} from "../hello-world/hello-world.module";

@Component({
  selector: 'app-my-super-layout-component',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HelloWorldModule],
  templateUrl: './my-super-layout.component.html',
})
export class MySuperLayoutComponent {
  stepTitles = ['Step 1', 'Step 2', 'Step 3'];
}
