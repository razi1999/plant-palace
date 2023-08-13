import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+')]),
    password: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9]+[a-zA-Z0-9]{5}')])
  });

  constructor(private router: Router) { }

  get name() { return this.form.get('name'); }
  get password() { return this.form.get('password'); }

  submit() {
    console.log(this.form.value);
    if (this.form.invalid) {
      return;
    }
    this.router.navigateByUrl('/');
  }
}
