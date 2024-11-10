import { Injectable } from "@angular/core";
import { mascota } from "./mascota.models";
import { ServicioMascotaService } from "./servicio-mascota.service";
import { DataServices } from "./data.service";

@Injectable({
  providedIn: 'root'
})
export class mascotasService{
 /* mascotas: mascota []=[
    new mascota('Rosa Carrillo','Lotificacion Florencia',12345678,'rosa@gmail.com','hachy','perro',5,'husky'),
    new mascota('Roberto Vasquez','Psj. los manguitos',12345678,'rvasquez@gmail.com','lobo','perro',3,'akita')
  ];*/
mascotas : mascota[]=[];

  constructor(private servicioMensaje: ServicioMascotaService, private dataService: DataServices){}

    agregar_mascota(mascota:mascota){
      this.servicioMensaje.muestra_mensaje("Registro ingresado: " + mascota.n_dueno);
      this.mascotas.push(mascota);
      this.dataService.guardar_arreglo(this.mascotas);
    }

    encontrar_mascota(indice: number){
      let mascota: mascota = this.mascotas[indice];
      return mascota;
    }

    actualizar_mascota(indice: number, mascota:mascota){
      this.servicioMensaje.muestra_mensaje("Actualizacion Exitosa");
      let mascotaAct = this.mascotas[indice];
      mascotaAct.n_dueno = mascota.n_dueno;
      mascotaAct.direccion = mascota.direccion;
      mascotaAct.numero = mascota.numero;
      mascotaAct.correo = mascota.correo;
      mascotaAct.n_mascota = mascota.n_mascota;
      mascotaAct.tipo_mascota = mascota.tipo_mascota;
      mascotaAct.edad = mascota.edad;
      mascotaAct.raza = mascota.raza;

      this.dataService.actualizar_posicion(indice, mascota);
    }


    eliminar_mascota(indice: number){
      this.servicioMensaje.muestra_mensaje("Registro eliminado exitosamente");
      this.mascotas.splice(indice,1);
      this.dataService.eliminar_posicion(indice);
      this.dataService.guardar_arreglo(this.mascotas);
    }

    obtener_empleado(){
      return this.dataService.cargar_arreglo();
    }

    set_empleado(misMascotas: mascota[]){
      this.mascotas = misMascotas;
    }
}
