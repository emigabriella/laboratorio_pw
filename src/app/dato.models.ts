export class datos{
  n_dueño: string = "";
  direccion : string = "";
  numero : number = 0;
  correo : string = "";
  n_mascota : string = "";
  tipo_mascota : string = "";
  edad : number = 0;
  raza : string = "";
  color : string = "";

  constructor(
    n_dueño: string,
    direccion : string,
    numero : number,
    correo : string,
    n_mascota : string,
    tipo_mascota : string,
    edad : number,
    raza : string,
    color : string,
  ){
    this.n_dueño = n_dueño;
    this.direccion = direccion;
    this.numero = numero;
    this.correo = correo;
    this.n_mascota = n_mascota;
    this.tipo_mascota = tipo_mascota;
    this.edad = edad;
    this.raza = raza;
    this.color = color;
  }
}
