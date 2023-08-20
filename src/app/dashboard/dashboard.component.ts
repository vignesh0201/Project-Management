import { Component } from '@angular/core';
import { JiraService } from '../jira.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  //todos: any;
  //  longText = `Recent Project`;
  products = [
    { id: 1, name: 'Product A', role: 'admin' },
    { id: 2, name: 'Product B', role: 'user' },
    { id: 3, name: 'Product C', role: 'developer' },
    { id: 4, name: 'Product d', role: 'tester' },
    // Add more product objects as needed
  ];


   projects: any[] = [];

   constructor(private projectService: ApiService, private http:JiraService) {}
 
   ngOnInit(): void {
     this.projects = this.projectService.getProjects();
}


  
  
}



