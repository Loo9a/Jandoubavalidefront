import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SignupService } from './services/signup.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TablesComponent } from './tables/tables.component';
import { BillingComponent } from './billing/billing.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule, HttpClient , provideHttpClient} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [

  { path: '', pathMatch:'full', redirectTo: '/home' },
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"speakers",component:SpeakersComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"tables",component:TablesComponent},
  {path:"billing",component:BillingComponent},
  {path:"profile",component:ProfileComponent},







];

export const appRouting = RouterModule.forRoot(routes);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SpeakersComponent,
    DashboardComponent,
    TablesComponent,
    BillingComponent,
    ProfileComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    provideHttpClient(),
    SignupService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
