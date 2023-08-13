import { Component, HostListener, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {
  activeTab: number = 1;
  isResponsiveNav: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        let url = event.url;
        if (url === '/') this.activeTab = 1;
        else if (url === '/gallery') this.activeTab = 2;
        else if (url.includes('category')) this.activeTab = 3;
        else this.activeTab = 0;
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    let width = event.currentTarget.innerWidth;
    if (width && width >= 767) { this.isResponsiveNav = false; }
    else if (width && width < 767) { this.isResponsiveNav = true; }
  }

  ngOnInit(): void {
  }

  navClick(id: number) {
    this.activeTab = id;
  }

}
