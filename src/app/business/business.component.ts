import { Component } from '@angular/core';
import { ConfirmationDialog } from '../dialogs/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-business',
  imports: [],
  templateUrl: './business.component.html',
  styleUrl: './business.component.css'
})
export class BusinessComponent {
  title = "What or Who is the Business?"

  constructor(public dialog: MatDialog) { }

  openConfirmationDialog() {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      data: {
        title: 'Confirmation',
        message: 'Are you sure you want to go forward'
      }
    });

  }
}
