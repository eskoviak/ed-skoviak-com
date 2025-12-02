import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "Our Philosophy and Focus"
  //body: any;
  html?: SafeHtml;


  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit(){
    this.http.get('assets/pages/esc_home.html', { responseType: 'text' }).subscribe(content => {
      this.html = this.sanitizer.bypassSecurityTrustHtml(content);
    });
  }
}

