import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsAbmAlumnosComponent } from './forms-abm-alumnos/forms-abm-alumnos.component';
import { RouterModule, Routes } from '@angular/router';

const rutas: Routes = [
  { path: '', component: FormsAbmAlumnosComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(rutas)
  ],
  exports: [
    RouterModule
  ]
})
export class AlumnosRoutingModule { }
