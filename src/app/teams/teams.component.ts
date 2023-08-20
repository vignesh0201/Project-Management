import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JiraService } from '../jira.service';

interface Product{
  username: string;
  password: number;
  role: string;
  }
@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {
  products = [
    { id: 1, name: 'Product A', role: 'admin' },
    { id: 2, name: 'Product B', role: 'team' },
   
    // Add more product objects as needed
  ];


prodData: Product[]=[];

constructor(private router:Router,private api:JiraService){}

ngOnInit(){
  this.api.getEmployee().subscribe(
    (data)=>{
      this.prodData = data;
      
    },
    (error)=>{
      //handle error
    }
  );
}
deleteProduct(product: Product) {
  const index = this.prodData.findIndex(p => p.username === product.username);
 if (index !== -1) {
    this.prodData.splice(0, 1);
  }}
 
}


