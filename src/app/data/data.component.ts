import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-data',
  imports: [],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent implements OnInit {
  title = 'Data and Information'
  html?: SafeHtml;
  
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit(){
    this.http.get('assets/pages/esc_data.html', { responseType: 'text' }).subscribe(content => {
      this.html = this.sanitizer.bypassSecurityTrustHtml(content);
    });
  }
}
