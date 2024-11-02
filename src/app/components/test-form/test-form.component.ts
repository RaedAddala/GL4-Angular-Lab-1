import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
    selector: 'app-test-form',
    templateUrl: './test-form.component.html',
    styleUrls: ['./test-form.component.css'],
    standalone: true,
    imports: [FormsModule]
})
export class TestFormComponent {
  processForm(form: NgForm) {
    console.log(form);
  }
}
