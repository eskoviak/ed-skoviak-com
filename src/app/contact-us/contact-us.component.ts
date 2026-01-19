import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogContent,
  MatDialogActions,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface DialogData {
  text: string;
  buttonText: {
    submit: string;
    cancel: string;
  };
  name: string | null;
  email: string | null;
  message: string | null;
  status: string | null;
}

@Component({
  selector: 'app-contact-us',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatDialogContent,
    MatDialogActions,
    MatButtonModule,
  ],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  standalone: true,
})
export class ContactUsComponent {
  title = 'Contact Us';

  constructor(
    private router: Router,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialogRef: MatDialogRef<ContactUsComponent>
  ) {}

  nameControl = new FormControl('');
  emailControl = new FormControl('');
  messageControl = new FormControl('');

  // Set the correct headers for sending JSON data.
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: '*/*',
  });

  onCancelClick(): void {
    console.log('Contact-Us Dialog canceled');
    this.data.status = 'cancel';
    this.dialogRef.close(this.data);
  }

  onSubmitClick(): void {
    console.log('Contact-Us Dialog submitted');
    this.data.status = 'submit';
    this.data.name = this.nameControl.value;
    this.data.email = this.emailControl.value;
    this.data.message = this.messageControl.value;
    this.dialogRef.close(this.data);
  }
}
