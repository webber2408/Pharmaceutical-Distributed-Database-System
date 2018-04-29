import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import {RouterModule , Routes} from '@angular/router';
import {AuthGuard} from './guards/auth.guard'
import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {ChatService} from './services/chat.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import { ConsultantsComponent } from './components/consultants/consultants.component';
import { RealtimeareaComponent } from './components/realtimearea/realtimearea.component';
import { RealtimeComponent } from './components/realtime/realtime.component';
import { SearchComponent } from './components/search/search.component';
import { AllmedicinesComponent } from './components/allmedicines/allmedicines.component';
import { CompanyWiseComponent } from './components/company-wise/company-wise.component';
import { DiseasesComponent } from './components/diseases/diseases.component';

const appRoutes: Routes = [
  {path:'',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent , canActivate:[AuthGuard]},
  {path:'profile',component:ProfileComponent , canActivate:[AuthGuard]},
  {path:'consultants',component:ConsultantsComponent , canActivate:[AuthGuard]},
  {path:'realtimearea',component:RealtimeareaComponent , canActivate:[AuthGuard]},
  {path:'search',component:SearchComponent , canActivate:[AuthGuard]},
  {path:'allmedicines',component:AllmedicinesComponent,canActivate:[AuthGuard]},
  {path:'company-wise',component:CompanyWiseComponent,canActivate:[AuthGuard]},
  {path:'diseases',component:DiseasesComponent,canActivate:[AuthGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    ConsultantsComponent,
    RealtimeareaComponent,
    RealtimeComponent,
    SearchComponent,
    AllmedicinesComponent,
    CompanyWiseComponent,
    DiseasesComponent,

  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,RouterModule.forRoot(appRoutes),FlashMessagesModule
  ],
  providers: [ValidateService,AuthService,AuthGuard,ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
