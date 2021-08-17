import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardDetailView } from './views/dashboard-detail/dashboard-detail.view';
import { DashboardView } from './views/dashboard/dashboard.view';
import { HomeView } from './views/home/home.view';

const routes: Routes = [
  {
    path: '',
    component: DashboardView,
  },
  {
    path: 'inicio',
    component: HomeView,
  },
  {
    path: 'curso',
    component: DashboardView,
  },
  {
    path: 'curso/:id',
    component: DashboardDetailView,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
