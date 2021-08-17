import { Component } from '@angular/core';
import { NavItem } from 'ui-components/interfaces/navItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title: string = 'App Galaxy';
  public menuOption: NavItem[] = [
    {
      title: 'Curso',
      link: '/curso',
    },
  ];
}
