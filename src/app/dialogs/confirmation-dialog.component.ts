import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogContent, MatDialogActions, MatDialogClose, MatDialogTitle } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-confirmation-dialog',
  imports: [CommonModule, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, MatDialogTitle],
  templateUrl: './confirmation-dialog.html',
  styleUrls: ['./dialogs.css']
})
export class ConfirmationDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string, buttonText: { ok: string, cancel: string } },public dialogRef: MatDialogRef<ConfirmationDialogComponent>) {}

  onCancelClick(): void {
    console.log('Dialog canceled');
    this.dialogRef.close();
  }

}