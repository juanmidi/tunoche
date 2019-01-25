import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { Borrar1Component } from './borrar1/borrar1.component';
import { HeaderComponent } from './header/header.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import { AutenticacionService } from './servicios/autenticacion.service';
import { ReactiveFormsModule } from '@angular/forms';
import { InisesComponent } from './autenticacion/inises/inises.component';
import { GuardService } from './servicios/guard.service';
import { LoginComponent } from './autenticacion/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    Borrar1Component,
    HeaderComponent,
    RegistroComponent,
    InisesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AutenticacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
