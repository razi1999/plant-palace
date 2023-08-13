import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isResponsive: boolean = false;
  isBelow: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  search(value: string) {
    console.log(value);
    this.router.navigateByUrl("/search/" + value);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    let width = event.currentTarget.innerWidth;
    if (width && width >= 995) { this.isResponsive = false; }
    else if (width && width < 995) { this.isResponsive = true; }
    if (width < 580) this.isBelow = true;
    else this.isBelow = false;
  }

}

