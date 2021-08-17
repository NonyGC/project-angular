import { Component, Input, OnInit } from '@angular/core';
import { NavItem } from 'ui-components/interfaces/navItem';

@Component({
  selector: 'ngc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title!: string;
  @Input() options!: NavItem[];
  constructor() { }

  ngOnInit() {
  }

}
