import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hemant-porfolio';
  classAdd:boolean;
  constructor(private router: Router) {

  }
  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
      this.classAdd = window.location.pathname === '/about' || window.location.pathname === '/portfolio'  ? true : false
    });
  }
}
