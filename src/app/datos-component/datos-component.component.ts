import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MascotaComponentComponent } from '../mascota-component/mascota-component.component';
import { ServicioMascotaService } from '../servicio-mascota.service';
import { mascota } from '../mascota.models';
import { mascotasService } from '../mascotas.service';

@Component({
  selector: 'app-datos-component',
  standalone: true,
  imports: [CommonModule, FormsModule, MascotaComponentComponent],
  providers: [ServicioMascotaService],
  templateUrl: './datos-component.component.html',
  styleUrl: './datos-component.component.css'
})
export class DatosComponentComponent implements OnInit{

  titulo = 'Registro de Mascotas';

  mascotas!: mascota[];

  cuadro_n_dueno: string = "";
  cuadro_direccion : string = "";
  cuadro_numero : number = 0;
  cuadro_correo : string = "";
  cuadro_n_mascota : string = "";
  cuadro_tipo_mascota : string = "";
  cuadro_edad : number = 0;
  cuadro_raza : string = "";
  cuadro_color : string = "";

  constructor(private miServicio: ServicioMascotaService, private mascotasService: mascotasService){
    //this.mascotas = this.mascotasService.mascotas;
  }

  ngOnInit(): void {
    this.mascotas = this.mascotasService.mascotas;
  }

  guardar_mascota(){
    //if
    let miMascota = new mascota(this.cuadro_n_dueno,this.cuadro_direccion,this.cuadro_numero,

    this.cuadro_correo,this.cuadro_n_mascota,this.cuadro_tipo_mascota,this.cuadro_edad,
    this.cuadro_raza,this.cuadro_color);

    //this.miServicio.muestra_mensaje("Registro realizado exitosamente");

    //this.mascotas.push(mimascota);
    this.mascotasService.agregar_mascota(miMascota);

    this.cuadro_n_dueno="";
    this.cuadro_direccion="";
    this.cuadro_numero=0;
    this.cuadro_correo="";
    this.cuadro_n_mascota="";
    this.cuadro_tipo_mascota="";
    this.cuadro_edad=0;
    this.cuadro_raza="";
    this.cuadro_color="";
  }
}
