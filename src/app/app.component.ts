import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import firebase from 'firebase/compat/app';
import { LoginService } from './login/login.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(private loginService: LoginService){}
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyCuLcvTMdc3qlDOZXlWqYZVYFOTUKO8rZc",
      authDomain: "gabriela-ortiz-ing-79e23.firebaseapp.com"
    });
  }

  estaLogueado(){
    return this.loginService.estaLogueado();
  }

  logout(){
    this.loginService.logout();
  }
}
