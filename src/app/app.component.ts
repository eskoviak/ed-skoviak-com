import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import {TooltipPosition, MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import { ConfirmationDialog } from './application/confirmation-dialog.component';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTooltipModule,
    MatDialogModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'Our Philosophy';
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = this.positionOptions[1];
  
  constructor(private router: Router, private dialog: MatDialog) {}

  onClick(event: Event, page: string) {
    if (page == 'Business') {
      console.log('Routing to Business page');
      this.router.navigate(['business']);  
    }else if (page == 'Data') {
      console.log('Routing to Data page');
      this.router.navigate(['data']);  
    }else if (page == 'Application') {
      console.log('Routing to Application page');
      this.router.navigate(['application']);  
    }else if (page == 'Technology') {
      console.log('Routing to Technology page');
      this.router.navigate(['technology']);
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(ConfirmationDialog,{
      data:{
        message: 'Are you sure want to delete?',
        buttonText: {
          ok: 'Save',
          cancel: 'No'
        }
      }
    });
    //const snack = this.snackBar.open('Snack bar open before dialog');

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        //snack.dismiss();
        const a = document.createElement('a');
        a.click();
        a.remove();
        //snack.dismiss();
        //this.snackBar.open('Closing snack bar in a few seconds', 'Fechar', {
        //  duration: 2000,
        //});
      }
    });
  }
}