import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'confirmation-dialog',
  imports: [MatDialogModule],
  templateUrl: './confirmation-dialog.html',
  styleUrls: ['./dialogs.css']
})
export class ConfirmationDialog {
  message: string = "Are you sure?"
  confirmButtonText = "Yes"
  cancelButtonText = "Cancel"
  constructor(
    /*
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<ConfirmationDialog>
    */
    ) {
      /*
      if(data){
    this.message = data.message || this.message;
    if (data.buttonText) {
      this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
      this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
    }
      }
    */
  }

  onConfirmClick(): void {
    //this.dialogRef.close(true);
  }

}