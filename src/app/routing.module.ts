import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes , RouterModule} from '@angular/router';
import { AuthUserGuard } from './modulos-compartidos/AuthUser/auth-user.guard';
import { LoginUserComponent } from './login-user/login-user.component';

const rutas: Routes = [

  {path: 'alumnos',
    loadChildren: () => import('./alumnos/alumnos.module').then(r => r.AlumnosModule),
    canActivate: [AuthUserGuard] },
  {path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then(r => r.CursosModule),
    canActivate: [AuthUserGuard]  },
  {path: 'clases',
    loadChildren: () => import('./clases/clases.module').then(r => r.ClasesModule),
    canActivate: [AuthUserGuard]  },
    {path: 'login', component: LoginUserComponent}
]

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
