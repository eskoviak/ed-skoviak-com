import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-application',
  imports: [],
  templateUrl: './application.component.html',
  styleUrl: './application.component.css'
})


export class ApplicationComponent implements OnInit {

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }
  title = "Application Architecture"
  html?: SafeHtml;

  ngOnInit(){
    this.http.get('assets/pages/esc_application.html', { responseType: 'text' }).subscribe(content => {
      this.html = this.sanitizer.bypassSecurityTrustHtml(content);
    });
  }

}
