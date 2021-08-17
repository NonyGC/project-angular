import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BtpIconComponent } from './btp-icon/btp-icon.component';
import { ButtonComponent } from './button/button.component';
import { CardBodyComponent } from './card/card-body/card-body.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

const COMPONENTS = [
  ButtonComponent,
  CardComponent,
  CardBodyComponent,
  HeaderComponent,
  FooterComponent,
  ButtonComponent,
  BtpIconComponent,
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule
  ],
  exports: [...COMPONENTS],
})
export class UiComponentsModule { }
