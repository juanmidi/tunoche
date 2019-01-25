import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { Borrar1Component } from './borrar1/borrar1.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import { InisesComponent } from './autenticacion/inises/inises.component';
import { LoginComponent } from './autenticacion/login/login.component';
import { GuardService } from './servicios/guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'borrar1', component: Borrar1Component, canActivate: [GuardService]},
  { path: 'inicio', component: InicioComponent, canActivate: [GuardService]},
  { path: 'registro', component: RegistroComponent },
  { path: 'iniciosesion', component: InisesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
