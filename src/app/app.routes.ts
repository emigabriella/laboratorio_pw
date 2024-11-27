import { Routes } from '@angular/router';
import { DatosComponentComponent } from './datos-component/datos-component.component';
import { RegistroComponentComponent } from './registro-component/registro-component.component';
import { ActualizarComponentComponent } from './actualizar-component/actualizar-component.component';
import { LoginComponent } from './login/login.component';
import { LoginGuardian } from './login/login-guardian';
import { EliminarComponentComponent } from './eliminar-component/eliminar-component.component';

export const routes: Routes = [
  {path: "", component: DatosComponentComponent, canActivate: [LoginGuardian]},
  {path: "registro", component: RegistroComponentComponent, canActivate: [LoginGuardian]},
  {path: "actualizar/:id", component: ActualizarComponentComponent, canActivate: [LoginGuardian]},
  {path: "eliminar/:id", component: EliminarComponentComponent, canActivate: [LoginGuardian]},
  {path: "login", component: LoginComponent}
];
