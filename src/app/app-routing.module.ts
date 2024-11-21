import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TablesComponent } from './tables/tables.component';
import { BillingComponent } from './billing/billing.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  { path: 'login', component: RegisterComponent },

  {path: 'home', component: HomeComponent},
  {path: 'register', component: LoginComponent},
  {path: 'speakers', component: SpeakersComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'tables', component: TablesComponent},
  {path: 'billing', component: BillingComponent},
  {path: 'profile', component: ProfileComponent},





  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
