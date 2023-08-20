import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private projects: any[] = []; // Placeholder for projects

  constructor() {}

  addProject(project: any) {
    this.projects.push(project);
  }

  getProjects() {
    return this.projects;
  }
}
