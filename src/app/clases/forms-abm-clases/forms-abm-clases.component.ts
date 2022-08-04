import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Clases, ClasesService } from 'src/app/modulos-compartidos/servicios/clases.service';

@Component({
  selector: 'app-forms-abm-clases',
  templateUrl: './forms-abm-clases.component.html',
  styleUrls: ['./forms-abm-clases.component.css']
})
export class FormsAbmClasesComponent implements OnInit {

  public formulario: FormGroup;
  public formularioBaja: FormGroup;
  public formularioMod: FormGroup;
  public claseForm: Clases;
  public respuesta: boolean;

  constructor(private fb: FormBuilder, public listaClases: ClasesService) {
    this.formulario = this.fb.group({
      comision: [, [Validators.required]],
      curso: [, [Validators.required]],
      id: [, [Validators.required]]
    });

    this.formularioBaja = this.fb.group({
      id: [, [Validators.required]]
    });

    this.formularioMod = this.fb.group({
      comision: [, [Validators.required]],
      curso: [, [Validators.required]],
      id: [, [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  crearClase(formulario: FormGroup){

    let comision = formulario.get('comision')?.value;
    let curso = formulario.get('curso')?.value;
    let id = formulario.get('id')?.value;
    this.claseForm = new Clases(comision, curso, id)

    let existe: boolean = false;
    this.listaClases.listadoClases.forEach(elem => {
     if(elem.id == this.claseForm.id){
      existe = true;
     }
    });

    if(!existe){
     this.listaClases.listadoClases.push(this.claseForm);
     this.listaClases.actualizarClases();
    }
  }


  modificarClase(formulario: FormGroup){
    let idAux = formulario.get('id')?.value;
    let curso = formulario.get('curso')?.value;
    let comision = formulario.get('comision')?.value;

    for(let i=0; i<this.listaClases.listadoClases.length-1 ;i++){
      if(this.listaClases.listadoClases[i].id == idAux ){
        this.listaClases.listadoClases[i].curso = curso;
        this.listaClases.listadoClases[i].comision = comision;
        break;
      }
    }
    this.listaClases.actualizarClases();
  };


  eliminarClase(formulario: FormGroup){
    let idAux = formulario.get('id')?.value;
    this.listaClases.listadoClases = this.listaClases.listadoClases.filter((clase) =>{
      if(clase.id == idAux){
        this.respuesta = true;
      }
      return clase.id != idAux;
    });
    this.listaClases.actualizarClases();
  };
}
