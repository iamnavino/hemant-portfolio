import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  classAdd:string;
  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit(){
    this.classAdd = window.location.pathname === '/about' ? 'white' : ''
console.log('fdfsd',this.classAdd)
  }

}
