import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioDatosService {

  constructor() { }

  mensaje(mensaje : string){
    alert(mensaje);
  }
}
