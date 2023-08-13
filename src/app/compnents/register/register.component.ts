import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+')]),
    password: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9]+[a-zA-Z0-9]{5}')]),
    confirmPassword: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9]+[a-zA-Z0-9]{5}')])
  });
  isSubmitted: boolean = false;

  constructor(private router: Router) { }

  get name() { return this.form.get('name'); }
  get password() { return this.form.get('password'); }
  get confirmPassword() { return this.form.get('confirmPassword'); }


  submit() {
    console.log(this.form.value);
    this.isSubmitted = true;
    if (this.form.invalid || this.password?.value !== this.confirmPassword?.value) {
      return;
    }
    this.router.navigateByUrl('/login');
  }
}
