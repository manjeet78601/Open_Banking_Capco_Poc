import { Component, Output, EventEmitter, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  sidenavWidth = 2;
  @Input() showToggle = true;
  @Input() showUser = true;
  @Input() showHeader = true;

  @Output() toggleCollapsed = new EventEmitter<void>();

  constructor( private router: Router) {}

  increase(){
    this.sidenavWidth = 15;
    console.log('increase sidenav width');
  }
  decrease(){
    this.sidenavWidth = 4;
    console.log("decrease sidenav width");
  }
}
