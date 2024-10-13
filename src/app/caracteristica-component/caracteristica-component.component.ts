import { Component } from '@angular/core';
import { ServicioDatosService } from '../servicio-datos.service';

@Component({
  selector: 'app-caracteristica-component',
  standalone: true,
  imports: [],
  providers:[ServicioDatosService],
  templateUrl: './caracteristica-component.component.html',
  styleUrl: './caracteristica-component.component.css'
})
export class CaracteristicaComponentComponent {
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() caracteristicas = new EventEmitter<string>();

  constructor(private miServicio: ServicioEmpleadoService){}

  agregar_caracteristica(value: string){
    //this.miServicio.muestra_mensaje("Caracteristica agregada: " + value);
    this.caracteristicas.emit(value);
  }
}
