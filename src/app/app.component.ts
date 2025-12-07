import { Component } from '@angular/core';
import {
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
  Router,
} from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
//import { MatDialog } from '@angular/material/dialog';
import { TooltipPosition } from '@angular/material/tooltip';
//import { MarkdownModule } from 'ngx-markdown';
//import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './dialogs/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ContactUsComponent } from './contact-us/contact-us.component';

interface DialogData {
  message: string,
  buttonText : {
    submit: string;
    cancel: string;
  }
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
    //MatDialogModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {
  title = 'Our Philosophy';
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = this.positionOptions[1];

  constructor(private router: Router, public dialog: MatDialog) {}

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
      if (result=='confirmed') {
        console.log('You clicked Save');
      } else {
        console.log('You clicked No');
      }
    });
  }

  openContactUsDialog() {
    const dialogData : DialogData = {
      message: 'Please fill out the form below to contact us.',
      buttonText: {
        submit: 'Submit',
        cancel: 'Cancel'
      }
    };
    const dialogRef = this.dialog.open(ContactUsComponent, {
      data: dialogData,
    });

  dialogRef.afterClosed().subscribe((result) => {
      console.log('The Contact-Us dialog was submitted');
      if(result == 'submit') {
        console.log('Form submitted');
      } else {
        console.log('Form not submitted');
      }
    });
  }
}