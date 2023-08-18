import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamworkComponent } from './teamwork/teamwork.component';
import { ProjectsComponent } from './projects/projects.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeamsComponent } from './teams/teams.component';
import { AppsComponent } from './apps/apps.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path : 'teamwork', component :TeamworkComponent},
  {path : 'login', component : LoginComponent},
  {path : 'projects', component : ProjectsComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'teams', component:TeamsComponent},
  {path: 'apps', component:AppsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
