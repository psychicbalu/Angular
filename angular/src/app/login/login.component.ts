import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   description: string = "please fill the form";
   css_styling: string = "fw-bolder text-danger";
   username: string = "";

   getUsername(event: any){
      console.log(event.target.value);
      this.username = event.target.value;
   }

   login(password: string) {
      console.log(password);
      alert(`username: ${this.username}, password: ${password}`);
   }
}
