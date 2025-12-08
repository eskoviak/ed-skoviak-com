import { Component } from '@angular/core';
import {
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
  Router,
} from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TooltipPosition } from '@angular/material/tooltip';
import { ConfirmationDialogComponent } from './dialogs/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ContactUsComponent } from './contact-us/contact-us.component';
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
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {
  title = 'Our Philosophy';
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = this.positionOptions[1];

  constructor(private router: Router, public dialog: MatDialog, private http : HttpClient) {}

    // Set the correct headers for sending JSON data.
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    //'Accept': '*/*',
  });

  onClickContactMe(event: Event) {
    console.log(event);
    console.log('Routing to Contact Us page');
    this.router.navigate(['contact-us']);
  }

  onClick(event: Event, page: string) {
    if (page == 'Business') {
      console.log('Routing to Business page');
      this.router.navigate(['business']);
    } else if (page == 'Data') {
      console.log('Routing to Data page');
      this.router.navigate(['data']);
    } else if (page == 'Application') {
      console.log('Routing to Application page');
      this.router.navigate(['application']);
    } else if (page == 'Technology') {
      console.log('Routing to Technology page');
      this.router.navigate(['technology']);
    } else if (page == 'Contact-Me') {
      console.log('Routing to Contact Us page');
      this.router.navigate(['contact-us']);
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: 'This is an over-ridden message',
        buttonText: {
          ok: 'Yea',
          cancel: 'Nay',
        },
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result == 'confirmed') {
        console.log('You clicked Save');
      } else {
        console.log('You clicked No');
      }
    });
  }

  openContactUsDialog() {
    const dialogData: DialogData = {
      text:
        'Please fill out the form below and we will get back to you as soon as possible.',
      buttonText: {
        submit: 'Submit',
        cancel: 'Cancel',
      },
      name: null,
      email: null,
      message: null,
      status: null,  
    };
    const dialogRef = this.dialog.open(ContactUsComponent, {
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      console.log('The Contact-Us dialog was closed');
      if (result.status == 'submit') {
        console.log('Submit');
        this.onSubmit(result);
      } else {
        console.log('Cancel');
      }
    });
  }

    onSubmit(msgData: DialogData) {
    console.log('Sending email data:', msgData);

    // Use http.post to send the data to your backend service.
    this.http
      .post('https://mail-sender-821892242376.us-south1.run.app', msgData, {
        headers: this.httpHeaders,
        observe: 'response', // Observe the full HTTP response.
      })
      .subscribe({
        next: (response) => {
          console.log('Email data sent successfully', response);
          if (response.status === 200) {
            // Navigate to home only on successful submission.
            this.router.navigate(['/home']);
          } else {
            console.error('Submission failed with status:', response.status);
          }
        },
        error: (error) => {
          // this is a hack--we get this error. even though the email send completes.
          // ISSUE 2
          // Log the error
          console.error('Error sending email data', error);
          // and go home
          this.router.navigate(['/home']);
        },
        complete: () => {
          console.info('HTTP request complete');
        },
      });
  }

}
