import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsAbmClasesComponent } from './forms-abm-clases/forms-abm-clases.component';
import { RouterModule, Routes } from '@angular/router';

const rutas: Routes = [
  { path: '', component: FormsAbmClasesComponent}
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
export class ClasesRoutingModule { }
