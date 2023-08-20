import { Component } from '@angular/core';
import { CreatedialogComponent } from './apps/createdialog/createdialog.component';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jiraproject';
  constructor(public dialog: MatDialog) {}

  openPopup(): void {
    const dialogRef = this.dialog.open(CreatedialogComponent, {
      width: '600px',
      height:'65vh'
    });
  }
  
}
