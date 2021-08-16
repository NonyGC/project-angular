import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'ngc-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @HostBinding() className = 'card'

  constructor() { }

  ngOnInit(): void {
  }

}
