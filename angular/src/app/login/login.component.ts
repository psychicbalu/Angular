import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   description: string = "please fill the form";
   css_styling: string = "fw-bolder text-danger";
   username: string = "";

   constructor(private loginRouter:Router,private ds:DataService){}

   getUsername(event: any){
      console.log(event.target.value);
      this.username = event.target.value;
   }

   login(){
      if(this.username){
        this.ds.loginUsername=this.username
        console.log();
      
      alert("Login Successful")
      this.loginRouter.navigateByUrl('/dashboard')
      }
      
    }
}
