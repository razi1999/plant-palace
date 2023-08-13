import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {

  fName: string = "";
  lName: string = "";
  email: string = "";
  message: string = "";

  constructor(private router: Router) {  }

  submit() {
    if (this.fName !== "" && this.lName !== "" && this.email !== "" && this.message !== "") {
      console.log({ firstName: this.fName, lastName: this.lName, email: this.email, message: this.message });
      this.router.navigateByUrl('/');
    }
  }
}
