import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsAbmClasesComponent } from './forms-abm-clases/forms-abm-clases.component';
import { ListaDeClasesComponent } from './lista-de-clases/lista-de-clases.component';
import { ClasesRoutingModule } from './clases-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../modulos-compartidos/material/material.module';

@NgModule({
  declarations: [
    FormsAbmClasesComponent,
    ListaDeClasesComponent
  ],
  imports: [
    CommonModule,
    ClasesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports:[
    MatCardModule,
    MatButtonModule
  ]
})
export class ClasesModule { }
