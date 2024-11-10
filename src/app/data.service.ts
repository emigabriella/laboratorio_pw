import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { mascota } from "./mascota.models";

@Injectable({
    providedIn: 'root'
})
export class DataServices{
    constructor(private httpClient: HttpClient){}

    guardar_arreglo(mascotas: mascota[]){
        this.httpClient.put('https://gabriela-ortiz-ing-79e23-default-rtdb.firebaseio.com/navidad.json', mascotas).subscribe(
            response => console.log("Se han guardado los cambios en firebase"),
            error=>console.log('Error: ' + error)
        );
    }

    cargar_arreglo(){
        return this.httpClient.get('https://gabriela-ortiz-ing-79e23-default-rtdb.firebaseio.com/navidad.json');
    }

    actualizar_posicion(indice: number, mascota: mascota){
        let url = "https://gabriela-ortiz-ing-79e23-default-rtdb.firebaseio.com/navidad/" + indice + ".json";

        this.httpClient.put(url, mascota).subscribe(
            response =>console.log("Se ha actualizado el empleado " + response),
            error =>console.log("Error: "+ error)
        );
    }

    eliminar_posicion(indice: number){
        let url = "https://gabriela-ortiz-ing-79e23-default-rtdb.firebaseio.com/navidad/" + indice + ".json";

        this.httpClient.delete(url).subscribe(
            response => console.log("Se ha eliminado el empleado " + response),
            error => console.log("Error: " + error)
        );
    }
}
