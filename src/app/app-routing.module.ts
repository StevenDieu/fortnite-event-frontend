import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './authentication/login/login.component';
import {RegisterComponent} from './authentication/register/register.component';
import {RecoveryComponent} from './authentication/recovery/recovery.component';
import {AuthGuard} from "./authentication/AuthGuard";

const appRoutes: Routes = [
  {path: 'accueil', component: HomeComponent},
  {path: 'accueil/:jwt', component: HomeComponent},
  {path: 'calendar', component: HomeComponent, canActivate: [AuthGuard]},
  {path: '', component: HomeComponent},
  {path: 'connexion', component: LoginComponent},
  {path: 'inscription', component: RegisterComponent},
  {path: 'recuperation-mot-de-passe', component: RecoveryComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
