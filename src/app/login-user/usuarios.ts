export class Usuarios {

  id: number;
  nombre: string;
  contraseña: string;

  constructor(name: string, password: string, id: number ){
    this.id = id;
    this.nombre = name;
    this.contraseña = password;
  }

}
