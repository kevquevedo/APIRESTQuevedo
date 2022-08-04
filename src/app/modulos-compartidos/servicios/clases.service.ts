import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export class Clases{
  comision: number;
  curso: string;
  id: number;

  constructor(comision: number, curso: string, id: number) {
    this.comision = comision;
    this.curso = curso;
    this.id = id;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ClasesService {

  public clases$: Observable<Clases[]>;
  private clases: Subject<Clases[]>;

  public listadoClases: Clases[] = [
    { comision: 2343, curso: "Curso Angular", id: 1 },
    { comision: 3421, curso: "Curso PHP", id: 2 },
    { comision: 6543, curso: "Curso Android", id: 3 },
    { comision: 1298, curso: "Curso Angular", id: 4 },
    { comision: 7631, curso: "Curso Cobol", id: 5 },
    { comision: 9076, curso: "Curso Cobol", id: 6 }
  ];

  constructor() {
    this.clases = new Subject();
    this.clases$ = this.clases.asObservable();
  }

  actualizarClases(){
    this.clases.next(this.listadoClases);
  }

}
