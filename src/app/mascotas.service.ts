import { Injectable } from "@angular/core";
import { mascota } from "./mascota.models";
import { ServicioMascotaService } from "./servicio-mascota.service";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class mascotasService{
  mascotas: mascota []=[
    new mascota('Rosa Carrillo','Lotificacion Florencia',12345678,'rosa@gmail.com','hachy','perro',5,'husky')
  ];

  private mascotasSubject: BehaviorSubject<mascota[]>= new BehaviorSubject(this.mascotas);

  constructor(private servicioMensaje: ServicioMascotaService){}

    agregar_mascota(mascota:mascota){
      this.servicioMensaje.muestra_mensaje("Registro ingresado: " + mascota.n_dueno);
      this.mascotas.push(mascota);
    }

    encontrar_mascota(indice: number){
      let mascota: mascota = this.mascotas[indice];
      return mascota;
    }

    actualizar_mascota(indice: number, mascota:mascota){
      let mascotaModificado = this.mascotas[indice];
      mascotaModificado.n_dueno = mascota.n_dueno;
      mascotaModificado.direccion = mascota.direccion;
      mascotaModificado.numero = mascota.numero;
      mascotaModificado.correo = mascota.correo;
      mascotaModificado.n_mascota = mascota.n_mascota;
      mascotaModificado.tipo_mascota = mascota.tipo_mascota;
      mascotaModificado.edad = mascota.edad;
      mascotaModificado.raza = mascota.raza;
    }


    eliminar_mascota(indice: number){
      this.servicioMensaje.muestra_mensaje("Registro eliminado exitosamente: ");
      this.mascotas.splice(indice,1);
    }
}
