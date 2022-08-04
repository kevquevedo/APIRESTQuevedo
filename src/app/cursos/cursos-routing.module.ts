import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsAbmCursosComponent } from './forms-abm-cursos/forms-abm-cursos.component';

const rutas: Routes = [
  { path: '', component: FormsAbmCursosComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(rutas)
  ],
  exports:[
    RouterModule
  ]
})
export class CursosRoutingModule { }
