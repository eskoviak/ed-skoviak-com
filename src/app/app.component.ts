import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {TooltipPosition, MatTooltipModule} from '@angular/material/tooltip';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTooltipModule

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {
  title = 'Our Philosophy';
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = this.positionOptions[1];
}
