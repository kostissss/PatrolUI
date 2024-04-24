import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { NotificationsComponent } from '../components/notifications/notifications.component';
import { GuardsComponent } from '../components/guardsView/guards/guards.component';
import { CompaniesComponent } from '../components/companies/companies.component';


const routes: Routes = [{ path: '', component: HomeComponent, children: [
  { path: 'notifications', component: NotificationsComponent },
  { path: 'guards', component: GuardsComponent },
  { path: 'comapnies', component: CompaniesComponent },]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
