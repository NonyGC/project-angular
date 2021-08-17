import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeView } from './views/home/home.view';
import { DashboardView } from './views/dashboard/dashboard.view';
import { DashboardDetailView } from './views/dashboard-detail/dashboard-detail.view';
import { HeaderComponent } from 'ui-components/header/header.component';
import { FooterComponent } from 'ui-components/footer/footer.component';
import { CardComponent } from 'ui-components/card/card.component';
import { CardBodyComponent } from 'ui-components/card/card-body/card-body.component';
import { ButtonComponent } from 'ui-components/button/button.component';
import { BtpIconComponent } from 'ui-components/btp-icon/btp-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeView,
    HeaderComponent,
    FooterComponent,
    DashboardView,
    DashboardDetailView,
    CardComponent,
    CardBodyComponent,
    ButtonComponent,
    BtpIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
