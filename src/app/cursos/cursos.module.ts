import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsAbmCursosComponent } from './forms-abm-cursos/forms-abm-cursos.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../modulos-compartidos/material/material.module';
import { CursosRoutingModule } from './cursos-routing.module';
import { ListaDeCursosComponent } from './lista-de-cursos/lista-de-cursos.component';


@NgModule({
  declarations: [
    FormsAbmCursosComponent,
    ListaDeCursosComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CursosRoutingModule
  ],
  exports:[
    MatCardModule,
    MatButtonModule
  ]
})
export class CursosModule { }
