import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { CardComponent } from '../card/card.component';


@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent {

  // userProfile: any = {
  //   email: 'user@example.com',
  //   username: 'exampleUser'
  // };

  // constructor(private dialog: MatDialog) {}

  // openInviteModal(): void {
  //   const dialogRef = this.dialog.open(CardComponent, {
  //     width: '300px',
  //     data: { username: this.userProfile.username }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       // Perform invitation logic here
  //       console.log('Invitation sent to:', result);
  //     }
  //   });
  // }

 
}
