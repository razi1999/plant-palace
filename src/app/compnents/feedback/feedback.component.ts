import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {

  form = new FormGroup({
    fName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+')]),
    lName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+')]),
    email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
    message: new FormControl('', [Validators.required])
  });
  isSubmitted: boolean = false;

  constructor(private router: Router) { }

  get fName() { return this.form.get("fName"); }
  get lName() { return this.form.get("lName"); }
  get email() { return this.form.get("email"); }
  get message() { return this.form.get("message"); }

  submit() {
    console.log(this.form.value);
    this.isSubmitted = true;

    if (this.form.invalid) {
      return;
    }
    this.router.navigateByUrl('/');
  }
}
