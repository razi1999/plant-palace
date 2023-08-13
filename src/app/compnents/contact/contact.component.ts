import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]+')]),
    email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
    phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
    message: new FormControl('', [Validators.required])
  });
  isSubmitted: boolean = false;

  constructor(private router: Router) { }

  get name() { return this.form.get("name"); }
  get email() { return this.form.get("email"); }
  get phone() { return this.form.get("phone"); }
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


