import { Component, Input, OnInit, ViewChild} from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Alumnos, AlumnosService } from '../../modulos-compartidos/servicios/alumnos.service';

@Component({
  selector: 'app-lista-de-alumnos',
  templateUrl: './lista-de-alumnos.component.html',
  styleUrls: ['./lista-de-alumnos.component.css']
})
export class ListaDeAlumnosComponent implements OnInit {

  @Input() listaActualizada: Alumnos[];
  @ViewChild(MatTable) tabla: MatTable<Alumnos>;

  datosDeAlumnos = new MatTableDataSource(this.listAlumnos.alumnos);
  mostrarLista: string = "";
  color: string = "white";
  titulos: string[] = ['nombreApellido', 'sexo', 'documento'];

  constructor(private listAlumnos: AlumnosService) {}

  ngOnInit(): void {

    this.listAlumnos.alum$.subscribe(respuesta =>{
      this.datosDeAlumnos.data = respuesta;
    });

  }

  public filtrarLista(caso: string){

    this.datosDeAlumnos.data = this.listAlumnos.alumnos
    switch (caso) {
      case 'M':

        this.datosDeAlumnos.data = this.datosDeAlumnos.data.filter(function(alumno){
          return alumno.sexo == 'M';
        });
        break;

      case 'F':
        this.datosDeAlumnos.data = this.datosDeAlumnos.data.filter(function(alumno){
          return alumno.sexo == 'F';
        });
        break;
      default:
        return this.datosDeAlumnos.data;
    };
    return this.datosDeAlumnos.data;
  };




}



