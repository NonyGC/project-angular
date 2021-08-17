import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Card } from 'ui-components/interfaces/Card';
import { Course } from '../../common/interfaces/course';

@Component({
  templateUrl: './dashboard.view.html',
  styleUrls: ['./dashboard.view.css'],
})
export class DashboardView implements OnInit {
  courses: Card[] = [
    {
      id: 1,
      imageLink: 'https://online.galaxy.edu.pe/193-home_default/programa-especializacion-aspnet-50-developer.jpg',
      title: 'Programa de especialización: ASP.NET 5.0 Developer',
      cardBodyItem: [
        { icon: 'bi-calendar-week', title: 'Día:', description: '15/07/2021' },
        { icon: 'bi-alarm', title: 'Hora:', description: '20 h' },
        { icon: 'bi-file-person', title: 'Instructor:', description: 'Julio Campos Ortiz' },
      ],
    },
    {
      id: 2,
      imageLink: 'https://online.galaxy.edu.pe/175-home_default/especializacion-java-web-developer.jpg',
      title: 'Especialización JAVA WEB DEVELOPER',
      cardBodyItem: [
        { icon: '', title: 'Día', description: '16/08/2021' },
        { icon: '', title: 'Hora', description: '19 h' },
        { icon: '', title: 'Instructor', description: 'Julio Campos Ortiz' },
      ],
    },
    {
      id: 3,
      imageLink: 'https://online.galaxy.edu.pe/214-home_default/oracle-database-plsql.jpg',
      title: 'Oracle Database: PL/SQL',
      cardBodyItem: [
        { icon: '', title: 'Día', description: '15/07/2021' },
        { icon: '', title: 'Hora', description: '20 h' },
        { icon: '', title: 'Instructor', description: 'Julio Campos Ortiz' },
      ],
    },
    {
      id: 5,
      imageLink: 'https://online.galaxy.edu.pe/219-home_default/full…e-developer-spring-webflux-react-js-y-mongodb.jpg',
      title: 'FULL-STACK REACTIVE DEVELOPER: SPRING WEBFLUX, REACT JS',
      cardBodyItem: [
        { icon: '', title: 'Día', description: '15/07/2021' },
        { icon: '', title: 'Hora', description: '20 h' },
        { icon: '', title: 'Instructor', description: 'Julio Campos Ortiz' },
      ],
    },
    {
      id: 6,
      imageLink: 'https://online.galaxy.edu.pe/211-home_default/devops-for-java-developers.jpg',
      title: 'DEVOPS FOR JAVA DEVELOPERS',
      cardBodyItem: [
        { icon: '', title: 'Día', description: '15/07/2021' },
        { icon: '', title: 'Hora', description: '20 h' },
        { icon: '', title: 'Instructor', description: 'Julio Campos Ortiz' },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
