import { Pipe, PipeTransform } from '@angular/core';
import { Alumnos } from '../servicios/alumnos.service';


@Pipe({
  name: 'conversorNombre'
})
export class ConversorNombrePipe implements PipeTransform {

  transform(alumno: Alumnos,): string {
    return `${alumno.apellido}, ${alumno.nombre}`;
  }
}
