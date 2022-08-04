import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alumnos, AlumnosService } from '../../modulos-compartidos/servicios/alumnos.service';

@Component({
  selector: 'app-forms-abm-alumnos',
  templateUrl: './forms-abm-alumnos.component.html',
  styleUrls: ['./forms-abm-alumnos.component.css']
})
export class FormsAbmAlumnosComponent implements OnInit {

  public formulario: FormGroup;
  public formularioBaja: FormGroup;
  public formularioMod: FormGroup;
  public alumnoForm: Alumnos;
  public respuesta: boolean;

  constructor(private fb: FormBuilder, public listaAlumnos: AlumnosService) {

    this.formulario = this.fb.group({
      nombre: [, [Validators.required]],
      apellido: [, [Validators.required]],
      sexo: [, [Validators.required]],
      documento: [, [Validators.required]]
    });

    this.formularioBaja = this.fb.group({
      documento: [, [Validators.required]]
    });

    this.formularioMod = this.fb.group({
      documento: [, [Validators.required]],
      nombre: [, [Validators.required]],
      apellido: [, [Validators.required]],
      sexo: [, [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.formulario.valueChanges.subscribe(value =>{
      console.log(value);
    });
  }

  crearAlumno(formulario: FormGroup){
    let nombre = formulario.get('nombre')?.value;
    let apellido = formulario.get('apellido')?.value;
    let sexo = formulario.get('sexo')?.value;
    let documento = formulario.get('documento')?.value;
    this.alumnoForm = new Alumnos(nombre, apellido, sexo, documento)

    let existe: boolean = false;
    this.listaAlumnos.alumnos.forEach(elem => {
     if(elem.documento == this.alumnoForm.documento){
      existe = true;
     }
    });

    if(!existe){
     this.listaAlumnos.alumnos.push(this.alumnoForm);
     this.listaAlumnos.actualizarAlumnos();
    }
  }


  modificarAlumno(formulario: FormGroup){
    let documentoAux = formulario.get('documento')?.value;
    let nombre = formulario.get('nombre')?.value;
    let apellido = formulario.get('apellido')?.value;
    let sexo = formulario.get('sexo')?.value;

    for(let i=0;i<this.listaAlumnos.alumnos.length-1;i++){
      if(this.listaAlumnos.alumnos[i].documento == documentoAux ){
        this.listaAlumnos.alumnos[i].nombre = nombre;
        this.listaAlumnos.alumnos[i].apellido = apellido;
        this.listaAlumnos.alumnos[i].sexo = sexo;
        break;
      }
    }
    this.listaAlumnos.actualizarAlumnos();
  };


  eliminarAlumno(formulario: FormGroup){
    let documentoAux = formulario.get('documento')?.value;
    this.listaAlumnos.alumnos = this.listaAlumnos.alumnos.filter((alumno) =>{
      if(alumno.documento == documentoAux){
        this.respuesta = true;
      }
      return alumno.documento != documentoAux;
    });
    this.listaAlumnos.actualizarAlumnos();
  };
}




