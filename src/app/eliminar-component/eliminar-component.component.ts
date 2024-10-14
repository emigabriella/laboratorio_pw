import { Component, EventEmitter, OnInit, Output, } from '@angular/core';
import { ServicioMascotaService } from '../servicio-mascota.service';
import { mascota } from '../mascota.models';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { mascotasService } from '../mascotas.service';


@Component({
  selector: 'app-eliminar-component',
  standalone: true,
  imports: [FormsModule,],
  providers :[ServicioMascotaService, Router],
  templateUrl: './eliminar-component.component.html',
  styleUrl: './eliminar-component.component.css'
})
export class EliminarComponentComponent implements OnInit{

  volverDatos(){
    this.router.navigate(['']);
  }

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

  indice!: number;

  mensajeEliminar: string = '';

  constructor(private router: Router, private mascotasService: mascotasService, private route: ActivatedRoute){
    //this.mascotas = this.mascotasService.mascotas;
  }

  ngOnInit(): void {
    this.indice = this.route.snapshot.params['id'];
    let mascota: mascota = this.mascotasService.encontrar_mascota(this.indice);
    this.cuadro_n_dueno=mascota.n_dueno;
    this.cuadro_direccion=mascota.direccion;
    this.cuadro_numero=mascota.numero;
    this.cuadro_correo=mascota.correo;
    this.cuadro_n_mascota=mascota.n_mascota;
    this.cuadro_tipo_mascota=mascota.tipo_mascota;
    this.cuadro_edad=mascota.edad;
    this.cuadro_raza=mascota.raza;
    this.cuadro_color=mascota.color;
  }


  eliminar_mascota(){
    this.mascotasService.eliminar_mascota(this.indice);
    this.mensajeEliminar = 'El registro ha sido eliminado con exito.';
    this.router.navigate(['']);
  }
}
