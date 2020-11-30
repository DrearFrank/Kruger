import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { environment } from '../environments/environment';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule, CarouselModule, MDBBootstrapModule, NavbarModule, WavesModule } from 'angular-bootstrap-md';
import {
  MatButtonModule,
  MatDialogModule,
  MatInputModule,
  MatOptionModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSnackBarModule,
  MatAutocompleteModule
} from '@angular/material';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';
/////////////////////////

import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';

///////////////////////


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';

import { ActivoComponent } from './activo/activo/activo.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,

    ActivoComponent,
  ],
  imports: [
    AutocompleteLibModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpModule,
    MDBBootstrapModule.forRoot(),
    CarouselModule,
    WavesModule,
    ButtonsModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
    NavbarModule,
    FormsModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    DlDateTimePickerDateModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    NgbModule
  ],
  providers: [AuthenticationService, AuthGuardService, MessageService, HttpErrorHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }
