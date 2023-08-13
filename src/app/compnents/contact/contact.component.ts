import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  name: string = "";
  phone: string = "";
  email: string = "";
  message: string = "";

  constructor(private router: Router) { }

  submit() {
    if (this.name !== "" && this.phone !== "" && this.email !== "" && this.message !== "") {
      console.log({ name: this.name, email: this.email, phone: this.phone, message: this.message });
      this.router.navigateByUrl('/');
    }
  }

}
