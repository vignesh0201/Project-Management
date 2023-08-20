import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
 
  // invitationData = {
  //   recipient: ''
  // };

  // constructor(
  //   public dialogRef: MatDialogRef<CardComponent>,
  //   @Inject(MAT_DIALOG_DATA) public data: any
  // ) {}

  // inviteUser(): void {
  //   // Perform form validation here and then close the dialog
  //   if (this.invitationData.recipient) {
  //     this.dialogRef.close(this.invitationData.recipient);
  //   }
  // }

  
 
}
