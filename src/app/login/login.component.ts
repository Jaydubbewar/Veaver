import { Component } from '@angular/core';
import { AuthService } from '../Auth.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  email:string = '';
  password:string = '';

  signemail:string = '';
  signpassword:string = '';

  constructor(private auth : AuthService){}

  login(){
    console.log('login in')
    
    this.auth.login(this.email,this.password);
    this.email=''
    this.password=''
    console.log('login successful')
  }

  signin(){
    console.log('signin in',this.signemail,this.signpassword)
   
    this.auth.register(this.signemail,this.signpassword);
    this.signemail=''
    this.signpassword=''
    console.log('signin successful')
  }
}
