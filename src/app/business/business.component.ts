import { Component } from '@angular/core';
//import { ConfirmationDialog } from '../dialogs/confirmation-dialog.component';
//import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-business',
  imports: [],
  templateUrl: './business.component.html',
  styleUrl: './business.component.css'
})
export class BusinessComponent {
  title = "Who are the Business Stakeholders?"
  html?: SafeHtml;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit(){
    this.http.get('assets/pages/esc_business.html', { responseType: 'text' }).subscribe(content => {
      this.html = this.sanitizer.bypassSecurityTrustHtml(content);
    });
  }
}