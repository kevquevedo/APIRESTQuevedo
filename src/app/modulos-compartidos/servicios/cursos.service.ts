import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export class Cursos{
  nombre: string;
  id: number;

  constructor(nombre: string, id: number) {
    this.nombre = nombre;
    this.id = id;
  }
}


@Injectable({
  providedIn: 'root'
})
export class CursosService {

  public cursos$: Observable<Cursos[]>;
  private cursos: Subject<Cursos[]>;

  public listadoCursos: Cursos[] = [
    { nombre: "Curso Angular", id: 1 },
    { nombre: "Curso Cobol", id: 2 },
    { nombre: "Curso Android", id: 3 },
    { nombre: "Curso PHP", id: 4 },
  ];

  constructor() {
    this.cursos = new Subject();
    this.cursos$ = this.cursos.asObservable();
  }

  actualizarCursos(){
    this.cursos.next(this.listadoCursos);
  }

}
