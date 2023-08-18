import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
    { id: 2, name: 'Product B', role: 'user' },
    { id: 3, name: 'Product C', role: 'developer' },
    { id: 4, name: 'Product d', role: 'tester' },
    // Add more product objects as needed
  ];


prodData: Product[]=[];

constructor(private router:Router){}


}


