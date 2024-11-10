import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { mascotasService } from '../mascotas.service';
import { mascota } from '../mascota.models';

@Component({
  selector: 'app-actualizar-component',
  standalone: true,
  imports: [FormsModule],
  providers:[Router],
  templateUrl: './actualizar-component.component.html',
  styleUrls: ['./actualizar-component.component.css']
})
export class ActualizarComponentComponent implements OnInit{
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
  accion!: number;

  constructor(private router: Router, private mascotasService: mascotasService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.accion =parseInt(this.route.snapshot.queryParams['accion'])
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
  }

  accion_mascota(){
    if(this.accion == 1){
    let miMascota = new mascota(this.cuadro_n_dueno, this.cuadro_direccion, this.cuadro_numero,
    this.cuadro_correo, this.cuadro_n_mascota, this.cuadro_tipo_mascota, this.cuadro_edad,
    this.cuadro_raza);

    this.mascotasService.actualizar_mascota(this.indice, miMascota);
}else {
  this.mascotasService.eliminar_mascota(this.indice);
}
    setTimeout(() =>{
      this.router.navigate(['']);
    }, 500);
  }
}
