import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Cursos, CursosService } from 'src/app/modulos-compartidos/servicios/cursos.service';

@Component({
  selector: 'app-lista-de-cursos',
  templateUrl: './lista-de-cursos.component.html',
  styleUrls: ['./lista-de-cursos.component.css']
})
export class ListaDeCursosComponent implements OnInit {

  @ViewChild(MatTable) tabla: MatTable<Cursos>;

  datosDeCursos = new MatTableDataSource(this.listCursos.listadoCursos);
  titulos: string[] = ['nombre', 'id'];

  constructor(private listCursos: CursosService) { }

  ngOnInit(): void {
    this.listCursos.cursos$.subscribe(respuesta =>{
      this.datosDeCursos.data = respuesta;
    });
  }


}
