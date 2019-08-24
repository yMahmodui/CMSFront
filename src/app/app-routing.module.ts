import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [];

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { DisplayLogsComponent } from './display-logs/display-logs.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestLogManagerComponent } from './test-log-manager/test-log-manager.component';
import { RegisterComponent } from './register/register.component';
import { GetUsersComponent } from './get-users/get-users.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'about',
    component: AboutComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'contact',
    component: ContactComponent,
  },

  {
    path: 'display-logs',
    component: DisplayLogsComponent,
  },

  {
    path: 'test-log-manager',
    component: TestLogManagerComponent,
  },

  {
    path: 'register',
    component: RegisterComponent,
  },

  {
    path: 'get-users',
    component: GetUsersComponent,
    canActivate: [AuthGuard,],
  },

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },

 
  {
    path: '**',
    component: PageNotFoundComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
