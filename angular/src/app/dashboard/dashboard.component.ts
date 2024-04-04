import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  hobbies:string=""

  allEmployee:any = [
    {
      empId: 100, empName: "max", empSal:20000
    },
    {
      empId: 101, empName: "mil", empSal:28000
    },{
      empId: 102, empName: "viz", empSal:30000
    },{
      empId: 100, empName: "jhon", empSal:40000
    },
  ]

  user:string=""
  constructor (private ds:DataService){
    this.user=this.ds.loginUsername
  }

}
