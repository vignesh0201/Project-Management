import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TvminfotechComponent } from './tvminfotech/tvminfotech.component';
import { TeamworkComponent } from './teamwork/teamwork.component';
import { ProjectsComponent } from './projects/projects.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeamsComponent } from './teams/teams.component';
import { AppsComponent } from './apps/apps.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {CdkDrag, CdkDropList} from '@angular/cdk/drag-drop';
import { NgFor } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TvminfotechComponent,
    TeamworkComponent,
    ProjectsComponent,
    DashboardComponent,
    TeamsComponent,
    AppsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatFormFieldModule,
    CdkDrag,NgFor,CdkDropList
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
