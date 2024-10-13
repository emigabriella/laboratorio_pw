import { Injectable } from "@angular/core";
import { mascota } from "./mascota.models";
import { ServicioMascotaService } from "./servicio-mascota.service";

@Injectable({
  providedIn: 'root'
})
export class mascotasService{
  mascotas: mascota []=[
    new mascota('Rosa','Florencia',12345678,'rosa@gmail.com','hachy','perro',5,'husky','negro con blanco')
  ];

  constructor(private servicioMensaje: ServicioMascotaService){}

    agregar_mascota_servicio(mascota:mascota){
      this.servicioMensaje.muestra_mensaje("nombre ingresado: " + mascota.n_mascota);
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
      mascotaModificado.color = mascota.color;
    }
}
