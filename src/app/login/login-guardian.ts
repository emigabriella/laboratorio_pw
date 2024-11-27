import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { LoginService } from "./login.service";

@Injectable({
  providedIn: 'root'
})

export class LoginGuardian implements CanActivate{
  constructor(private LoginService: LoginService, private router:Router){}

  canActivate(route : ActivatedRouteSnapshot, state: RouterStateSnapshot){

    if(this.LoginService.estaLogueado()){
      return true;
    }else{
      this.router.navigate(['login']);
      return false;
    }
  }
}
