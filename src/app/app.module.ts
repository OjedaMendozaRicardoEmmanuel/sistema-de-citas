import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from './modulos/inicio/inicio.component';
import { PacientesComponent } from './modulos/pacientes/pacientes.component';
import { OdontologosComponent } from './modulos/odontologos/odontologos.component';
import { CitasComponent } from './modulos/citas/citas.component';
import { PagosComponent } from './modulos/pagos/pagos.component';
import { HistorialComponent } from './modulos/historial/historial.component';
import { PanelComponent } from './panel/panel.component';
import { PersonalComponent } from './modulos/personal/personal.component';
import { AjustesComponent } from './modulos/ajustes/ajustes.component';
import { GestionCitasComponent } from './modulos/gestion-citas/gestion-citas.component';
import { ReportesComponent } from './modulos/reportes/reportes.component';
import { CompartirDatosService } from './services/compartir-datos.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiInterceptor } from './services/api.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    InicioComponent,
    PacientesComponent,
    OdontologosComponent,
    CitasComponent,
    PagosComponent,
    HistorialComponent,
    PanelComponent,
    PersonalComponent,
    AjustesComponent,
    GestionCitasComponent,
    ReportesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientModule,
  ],
  providers: [CompartirDatosService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
