import { Routes } from '@angular/router';
import { DatosComponentComponent } from './datos-component/datos-component.component';
import { RegistroComponentComponent } from './registro-component/registro-component.component';
import { ActualizarComponentComponent } from './actualizar-component/actualizar-component.component';
import { EliminarComponentComponent } from './eliminar-component/eliminar-component.component';

export const routes: Routes = [
  {path: "", component: DatosComponentComponent},
  {path: "registro", component: RegistroComponentComponent},
  {path: "actualizar/id:", component: ActualizarComponentComponent},
  {path:"eliminar", component: EliminarComponentComponent}
];
