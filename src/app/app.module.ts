import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// For Forms Binding! - Template Driven Forms
import { FormsModule } from '@angular/forms';

// For Forms Binding! - Reactive Forms
import { ReactiveFormsModule } from '@angular/forms';

// **************************************************
// **************************************************
// **************************************************
// For using HttpClient
// import { HttpClientModule } from '@angular/common/http';
// **************************************************

// **************************************************
import { JwtInterceptor } from './interceptors/JwtInterceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// **************************************************
// **************************************************
// **************************************************

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AlertComponent } from './alert/alert.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { DisplayLogsComponent } from './display-logs/display-logs.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestLogManagerComponent } from './test-log-manager/test-log-manager.component';
import { RegisterComponent } from './register/register.component';
import { GetUsersComponent } from './get-users/get-users.component';

@NgModule({
  declarations: [

    AppComponent,

    HomeComponent,
    AboutComponent,
    AlertComponent,
    LoginComponent,
    NavbarComponent,
    ContactComponent,
    DisplayLogsComponent,
    PageNotFoundComponent,
    TestLogManagerComponent,
    RegisterComponent,
    GetUsersComponent,

  ],

  imports: [

    BrowserModule,

    // For Forms Binding! - Template Driven Forms
    FormsModule,

    // For Forms Binding! - Reactive Forms
    ReactiveFormsModule,

    // For using HttpClient
    HttpClientModule,

    AppRoutingModule,
  ],

  providers: [

    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
