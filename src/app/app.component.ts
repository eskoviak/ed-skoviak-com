import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
//import { MatDialog } from '@angular/material/dialog';
import { TooltipPosition } from '@angular/material/tooltip';
import { MarkdownModule } from 'ngx-markdown';
//import { MatDialogModule } from '@angular/material/dialog';
//import { ConfirmationDialog } from './dialogs/confirmation-dialog.component';
 
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
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'Our Philosophy';
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = this.positionOptions[1];

  constructor(private router: Router) { }

  onClickContactMe(event: Event) {
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
    }
  }

  /*
  openDialog() {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      data: {
        message: 'This is an over-ridden message',
        buttonText: {
          ok: 'Yea',
          cancel: 'Nay'
        }
      }
    });
    //const snack = this.snackBar.open('Snack bar open before dialog');

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        console.log('You clicked Save')
      }
      else {
        console.log('You clicked No')
      }
    });
    
  }
  */  
}