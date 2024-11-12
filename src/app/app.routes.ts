import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { StoreComponent } from './store/store.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboardHeader', component: DashboardHeaderComponent },
  { path: 'store', component: StoreComponent },
];
