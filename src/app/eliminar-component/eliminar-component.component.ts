import { Component, OnInit} from '@angular/core';
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

  indice!: number;

  mensajeEliminar: string = '';

  constructor(private router: Router, private mascotasService: mascotasService, private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.mascotas = this.mascotasService.mascotas;
  }


  eliminar_mascota(){
    this.mascotasService.eliminar_mascota(this.indice);
    this.router.navigate(['']);
  }
}
