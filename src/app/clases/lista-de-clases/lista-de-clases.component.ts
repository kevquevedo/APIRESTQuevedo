import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Clases, ClasesService } from 'src/app/modulos-compartidos/servicios/clases.service';

@Component({
  selector: 'app-lista-de-clases',
  templateUrl: './lista-de-clases.component.html',
  styleUrls: ['./lista-de-clases.component.css']
})
export class ListaDeClasesComponent implements OnInit {

  @ViewChild(MatTable) tabla: MatTable<Clases>;

  datosDeClases = new MatTableDataSource(this.listClases.listadoClases);
  titulos: string[] = ['comision','curso', 'id'];

  constructor(private listClases: ClasesService) { }

  ngOnInit(): void {
    this.listClases.clases$.subscribe(respuesta =>{
      this.datosDeClases.data = respuesta;
    });
  }

}
