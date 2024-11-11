import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { mascota } from '../mascota.models';
import { CaracteristicasMascotaComponentComponent } from '../caracteristicas-mascota-component/caracteristicas-mascota-component.component';


@Component({
  selector: 'app-mascota-component',
  standalone: true,
  imports: [CaracteristicasMascotaComponentComponent, CommonModule, RouterModule],
  templateUrl: './mascota-component.component.html',
  styleUrl: './mascota-component.component.css'
})
export class MascotaComponentComponent {

  @Input()
  mascotaLista!: mascota;
  @Input()
  indice!: number;
  array_caracteristicas = [''];
mascota: any;

  agregar_caracteristica(caracteristica:string){
    this.array_caracteristicas.push(caracteristica);
  }
}
