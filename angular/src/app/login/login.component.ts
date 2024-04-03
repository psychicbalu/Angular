import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  description:string="Please fill the form"
  css_styling:string="fw-bolder text-danger"
  getUsername(event:any){
    console.log(event.target.value)
  }
  login(){
    alert("Login Successful")
  }

}
