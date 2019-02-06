import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { Borrar1Component } from './borrar1/borrar1.component';
import { HeaderComponent } from './header/header.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import { MapComponent } from './map/map.component';
import { AutenticacionService } from './servicios/autenticacion.service';
import { ReactiveFormsModule } from '@angular/forms';
import { InisesComponent } from './autenticacion/inises/inises.component';
import { LoginComponent } from './autenticacion/login/login.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    Borrar1Component,
    HeaderComponent,
    RegistroComponent,
    InisesComponent,
    LoginComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxMapboxGLModule.withConfig({
    accessToken: 'pk.eyJ1IjoicmVuem9tb250ZWxlb25lIiwiYSI6ImNqcTl3dGxrYzAxZW80NHBra3B5OGM4bmEifQ.bs4sMPJnN12UmXPY44693g'
    })
  ],
  providers: [AutenticacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
