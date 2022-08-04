import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export class Alumnos{

  nombre: string;
  apellido: string;
  sexo: string;
  documento: number;

  constructor(nombre: string, apellido: string, sexo: string, documento: number) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.sexo = sexo;
    this.documento = documento;
  }

}

@Injectable({
  providedIn: 'root'
})

export class AlumnosService {

  public alum$: Observable<Alumnos[]>;
  private alum: Subject<Alumnos[]>;

  public alumnos: Alumnos[] = [
    { nombre: "Kevin", apellido: "Quevedo", sexo: "M", documento: 38383838 },
    { nombre: "Graciela", apellido: "Fernandez", sexo: "F", documento: 37373737 },
    { nombre: "Gaston", apellido: "Gutierrez", sexo: "M", documento: 36363636 },
    { nombre: "Agustina", apellido: "Lopez", sexo: "F", documento: 39393939 },
    { nombre: "Leandro", apellido: "Salvatore", sexo: "M", documento: 41414141 } ,
    { nombre: "Daniela", apellido: "Fiorello", sexo: "F", documento: 45454545 },
    { nombre: "Matias", apellido: "Cinzano", sexo: "M", documento: 29292929 }
  ];

  constructor() {
    this.alum = new Subject();
    this.alum$ = this.alum.asObservable();
  }

  actualizarAlumnos(){
    this.alum.next(this.alumnos);
  }
}
