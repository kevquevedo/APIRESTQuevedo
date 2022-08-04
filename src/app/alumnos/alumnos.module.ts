import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsAbmAlumnosComponent } from './forms-abm-alumnos/forms-abm-alumnos.component';
import { ListaDeAlumnosComponent } from './lista-de-alumnos/lista-de-alumnos.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../modulos-compartidos/material/material.module';
import { ConversorNombrePipe } from '../modulos-compartidos/pipes/conversor-nombre.pipe';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { ModulosCompartidosModule } from '../modulos-compartidos/modulos-compartidos.module';

@NgModule({
  declarations: [
    FormsAbmAlumnosComponent,
    ListaDeAlumnosComponent,
    ConversorNombrePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AlumnosRoutingModule,
    ModulosCompartidosModule
  ],
  exports:[
    MatTableModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class AlumnosModule { }
