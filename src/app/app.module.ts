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
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {CdkDrag, CdkDropList, DragDropModule} from '@angular/cdk/drag-drop';
import { NgFor, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { LoginComponent } from './login/login.component';
import { MatInputModule } from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { CreatedialogComponent } from './apps/createdialog/createdialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CardComponent } from './card/card.component';
import { MatSidenavModule } from '@angular/material/sidenav';



@NgModule({
  declarations: [
    AppComponent,
    TvminfotechComponent,
    ProjectsComponent,
    DashboardComponent,
    TeamsComponent,
    AppsComponent,
    TeamworkComponent,
    LoginComponent,
    CreatedialogComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    FormsModule,
    CdkDrag,
    CdkDropList,
    MatCardModule,
    MatDividerModule,
    MatIconModule, 
      MatProgressBarModule,
      DragDropModule,
      MatInputModule,
      MatSidenavModule,

       
  
    ],
    
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 
 }
