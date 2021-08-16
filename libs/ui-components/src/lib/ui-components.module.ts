import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { CardBodyComponent } from './card/card-body/card-body.component';
import { CardComponent } from './card/card.component';

const COMPONENTS = [
  ButtonComponent,
  CardComponent,
  CardBodyComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule
  ],
  exports: [...COMPONENTS],
})
export class UiComponentsModule { }
