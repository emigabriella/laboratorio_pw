import { Component } from '@angular/core';
import { CaracteristicaComponentComponent } from '../caracteristica-component/caracteristica-component.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mascotas-component',
  standalone: true,
  imports: [CaracteristicaComponentComponent, CommonModule, RouterModule],
  templateUrl: './mascotas-component.component.html',
  styleUrl: './mascotas-component.component.css'
})
export class MascotasComponentComponent {
  @Input() mascotaLista: dato;
  @Input() indice: number;
  array_caracteristicas = [''];

  agregar_caracteristica(caracteristica:string){
    this.array_caracteristicas.push(caracteristica);
  }
}
