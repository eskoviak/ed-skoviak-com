import { Component, OnInit } from '@angular/core';
import { HttpClient, httpResource } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-technology',
  imports: [],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.css',
})
export class TechnologyComponent implements OnInit {
  title = 'Technology Architecture';
  html?: SafeHtml;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.http
      .get('assets/pages/esc_technology.html', { responseType: 'text' })
      .subscribe((content) => {
        this.html = this.sanitizer.bypassSecurityTrustHtml(content);
      });
  }
}
