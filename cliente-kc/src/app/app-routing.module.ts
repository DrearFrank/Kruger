import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { AuthGuardService } from './auth-guard.service';
import { ActivoComponent } from './activo/activo/activo.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: 'activos', component: ActivoComponent,
    canActivate: [AuthGuardService]
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
