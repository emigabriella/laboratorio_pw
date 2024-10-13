import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioMascotaService } from '../servicio-mascota.service';

@Component({
  selector: 'app-caracteristicas-mascota-component',
  standalone: true,
  imports: [],
  providers: [ServicioMascotaService],
  templateUrl: './caracteristicas-mascota-component.component.html',
  styleUrl: './caracteristicas-mascota-component.component.css'
})
export class CaracteristicasMascotaComponentComponent {
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() caracteristicasMascotas = new EventEmitter<string>();

  constructor(private miServicio: ServicioMascotaService){}

  agregar_caracteristica(value: string){
    //this.miServicio.muestra_mensaje("Caracteristica agregada: " + value);
    this.caracteristicasMascotas.emit(value);
  }
}
