import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PlantPalace';

  constructor(private router: Router) {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let url: string = event.url;
        let path: string = "Home";

        if (url.includes('gallery')) path = 'Gallery';
        else if (url.includes('blog')) path = 'About Us';
        else if (url.includes('sitemap')) path = 'Site Map';
        else if (url.includes('contact')) path = 'Contact Us';
        else if (url.includes('feedback')) path = 'Feedback';
        else if (url.includes('search')) path = 'Search';
        else if (url.includes('category')) path = 'Category';
        else if (url.includes('detail')) path = 'Detail';
        else if (url.includes('cart')) path = 'Cart';
        else if (url.includes('register')) path = 'Register';
        else if (url.includes('login')) path = 'Login';

        document.title = this.title + " | " + path;
      }
    });

  }
}
