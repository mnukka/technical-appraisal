import {Component, Input} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html'
})
export class StepperComponent {
  @Input() steps: string[] = [];
  currentIndex = 0;
  fieldOneGroup: FormGroup<{ fieldOne: FormControl<string | null> }>;

  constructor(private formBuilder: FormBuilder) {
    this.fieldOneGroup = new FormGroup({
      fieldOne: new FormControl("", [
        Validators.required,
      ]),
    });
  }

  get fieldOne() {
    return this.fieldOneGroup.get('fieldOne');
  }
  goToNextStep() {
    if (this.currentIndex < this.steps.length - 1) {
      this.currentIndex++;
    }
  }

  goToPreviousStep() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
