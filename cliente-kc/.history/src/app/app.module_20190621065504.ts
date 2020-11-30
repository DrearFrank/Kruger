import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import {environment} from '../environments/environment';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonsModule, CarouselModule, MDBBootstrapModule, NavbarModule, WavesModule} from 'angular-bootstrap-md';
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

import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {FlatpickrModule} from 'angularx-flatpickr';
/////////////////////////

import {DlDateTimePickerDateModule} from 'angular-bootstrap-datetimepicker';

///////////////////////


import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './/app-routing.module';
import { CarListComponent } from './carrera/carrera/car-list.component';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';
import { CatActivosComponent } from './cat-activos/cat-activos/cat-activos.component';
import { CatEqElectricoComponent } from './cat-eq-electrico/cat-eq-electrico/cat-eq-electrico.component';
import { CiclosAcadeComponent } from './ciclos/ciclos-acade/ciclos-acade.component';
import { EspaciosComponent } from './espacios/espacios/espacios.component';
import { HorarioFormComponent } from './horario/horario-form/horario-form.component';
import { HorarioUpdatedComponent } from './horario/horario-updated/horario-updated.component';
import { HorarioListComponent } from './horario/horario-list/horario-list.component';
import { MantenimientoComponent } from './mantenimiento/mantenimiento/mantenimiento.component';
import { MarcaOrdenadorComponent } from './marca-ordenador/marca-ordenador/marca-ordenador.component';
import { OrdenadorListComponent } from './ordenador/ordenador-list/ordenador-list.component';
import { OrdenadorFormComponent } from './ordenador/ordenador-form/ordenador-form.component';
import { PersonasListComponent } from './personas/personas-list/personas-list.component';
import { PersonasFormComponent } from './personas/personas-form/personas-form.component';
import { ReqSoftwareComponent } from './req-software/req-software/req-software.component';
import { SoftwareComponent } from './software/software/software.component';
import { TipoEspaciosComponent } from './tipo-espacios/tipo-espacios/tipo-espacios.component';
import { TipoMantenimientoComponent } from './tipo-mantenimiento/tipo-mantenimiento/tipo-mantenimiento.component';
import { UbicacionActivosComponent } from './ubicacion-activos/ubicacion-activos/ubicacion-activos.component';
import { UbicacionEqelectricosComponent } from './ubicacion-eqelectricos/ubicacion-eqelectricos/ubicacion-eqelectricos.component';
import { UbicacionOrdenadoresComponent } from './ubicacion-ordenadores/ubicacion-ordenadores/ubicacion-ordenadores.component';

import { ActivoComponent } from './activo/activo/activo.component';
import { DocenteComponent } from './docente/docente/docente.component';
import { ReservasComponent } from './reservas/reservas/reservas.component';
import { ClienNavComponent } from './clien-nav/clien-nav.component';
import {ReservasFromComponent} from './reservas/reservas-from/reservas-from.component';



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavComponent,
    CarListComponent,
    CatActivosComponent,
    CatEqElectricoComponent,
    CiclosAcadeComponent,
    EspaciosComponent,
    HorarioFormComponent,
    HorarioUpdatedComponent,
    HorarioListComponent,
    MantenimientoComponent,
    MarcaOrdenadorComponent,
    OrdenadorListComponent,
    OrdenadorFormComponent,
    ReservasFromComponent,
    PersonasListComponent,
    PersonasFormComponent,
    ReqSoftwareComponent,
    SoftwareComponent,
    TipoEspaciosComponent,
    TipoMantenimientoComponent,
    UbicacionActivosComponent,
    UbicacionEqelectricosComponent,
    UbicacionOrdenadoresComponent,
    ActivoComponent,
    DocenteComponent,
    ReservasComponent,
    ClienNavComponent,
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
    useFactory: adapterFactory }),
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
export class AppModule {}
