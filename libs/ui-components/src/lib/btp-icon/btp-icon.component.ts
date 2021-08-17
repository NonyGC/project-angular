import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngc-btp-icon',
  templateUrl: './btp-icon.component.html',
  styleUrls: ['./btp-icon.component.css']
})
export class BtpIconComponent implements OnInit {
  @Input() icon!: string ;
  @HostBinding('class')
  get className(): string {
    return `bi ${this.icon}`;
  }
  constructor() { }

  ngOnInit() {
  }

}
