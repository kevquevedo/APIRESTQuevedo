import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Usuarios } from './usuarios';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  private listaUsuarios: any[];
  usuarioIngresado: string;
  contraseñaIngresada: string;
  public formulario: FormGroup;

  constructor(public ruteo:Router, private httpClient: HttpClient, private fb: FormBuilder) {

    this.formulario = this.fb.group({
      usuario: [null],
      contraseña: [null]
    });

  }

  ngOnInit(): void {
    this.formulario.valueChanges.subscribe(value =>{
      console.log(value);
    });
    this.obtenerUsuarios();
  }

  validarUsuario(formulario: FormGroup){

    this.usuarioIngresado = formulario.get('usuario')?.value;
    this.contraseñaIngresada = formulario.get('contraseña')?.value;

    this.listaUsuarios.forEach(usuario => {

      if(usuario.name == this.usuarioIngresado && usuario.password == this.contraseñaIngresada){

        sessionStorage.setItem("usuario", usuario.name);
        sessionStorage.setItem("contraseña", usuario.password);
        this.ruteo.navigateByUrl('');
      }
    });
  }


  obtenerUsuarios(){

    this.httpClient.get( `https://62eb3355705264f263d4c8e1.mockapi.io/usuarios/users`
    ).subscribe(respuesta =>{
      this.listaUsuarios = respuesta as any[];
    });


  }



}
