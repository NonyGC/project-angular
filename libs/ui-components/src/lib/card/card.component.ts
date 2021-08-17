import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Card } from 'ui-components/interfaces/Card';

@Component({
  selector: 'ngc-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() contentClass!: Array<string>;
  @Input() cardModel!: Card;

  @HostBinding('class')
  get className(): string {
    return this.contentClass.join(' ');
  }
  constructor() {}

  ngOnInit(): void {}
}
