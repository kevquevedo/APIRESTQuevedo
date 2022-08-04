import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cursos, CursosService } from 'src/app/modulos-compartidos/servicios/cursos.service';

@Component({
  selector: 'app-forms-abm-cursos',
  templateUrl: './forms-abm-cursos.component.html',
  styleUrls: ['./forms-abm-cursos.component.css']
})
export class FormsAbmCursosComponent implements OnInit {

  public formulario: FormGroup;
  public formularioBaja: FormGroup;
  public formularioMod: FormGroup;
  public cursoForm: Cursos;
  public respuesta: boolean;

  constructor(private fb: FormBuilder, public listaCursos: CursosService) {

    this.formulario = this.fb.group({
      nombre: [, [Validators.required]],
      id: [, [Validators.required]]
    });

    this.formularioBaja = this.fb.group({
      id: [, [Validators.required]]
    });

    this.formularioMod = this.fb.group({
      nombre: [, [Validators.required]],
      id: [, [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  crearCurso(formulario: FormGroup){
    let nombre = formulario.get('nombre')?.value;
    let id = formulario.get('id')?.value;
    this.cursoForm = new Cursos(nombre, id)

    let existe: boolean = false;
    this.listaCursos.listadoCursos.forEach(elem => {
     if(elem.id == this.cursoForm.id){
      existe = true;
     }
    });

    if(!existe){
     this.listaCursos.listadoCursos.push(this.cursoForm);
     this.listaCursos.actualizarCursos();
    }
  }


  modificarCurso(formulario: FormGroup){
    let idAux = formulario.get('id')?.value;
    let nombre = formulario.get('nombre')?.value;

    for(let i=0; i<this.listaCursos.listadoCursos.length-1 ;i++){
      if(this.listaCursos.listadoCursos[i].id == idAux ){
        this.listaCursos.listadoCursos[i].nombre = nombre;
        break;
      }
    }
    this.listaCursos.actualizarCursos();
  };


  eliminarCurso(formulario: FormGroup){
    let idAux = formulario.get('id')?.value;
    this.listaCursos.listadoCursos = this.listaCursos.listadoCursos.filter((curso) =>{
      if(curso.id == idAux){
        this.respuesta = true;
      }
      return curso.id != idAux;
    });
    this.listaCursos.actualizarCursos();
  };
}
