import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
//import { FormsModule } from '@angular/forms';

// Import standalone components
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ClientHeaderComponent } from './components/client/client-header/client-header.component';
import { AdminHeaderComponent } from './components/admin/admin-header/admin-header.component';
import { ClientHomeComponent } from './components/client/client-home/client-home.component';
import { ClientLoginPageComponent } from './components/client/client-login-page/client-login-page.component';
import { ClientSignUpComponent } from './components/client/client-sign-up/client-sign-up.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminLoginPageComponent } from './components/admin/admin-login-page/admin-login-page.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { PagingComponent } from './components/paging/paging.component';
// (continue importing all standalone components...)

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatRippleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule,
    MatSnackBarModule,
    MatButtonModule,
    // Import standalone components
    AppComponent,
    AppHeaderComponent,
    AboutusComponent,
    HomePageComponent,
    ContactusComponent,
    ClientHeaderComponent,
    AdminHeaderComponent,
    ClientHomeComponent,
    ClientLoginPageComponent,
    ClientSignUpComponent,
    AdminHomeComponent,
    AdminLoginPageComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    PagingComponent,
    // (continue importing all standalone components...)
  ],
  providers: [DatePipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
