import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "Our Philosophy"
  body: any;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //this.fetchData();
  }

  fetchData() {
    this.http.get('https://storage.cloud.google.com/esc_cdn/esc_home.html.txt').subscribe(data => {
      this.body = data;
      console.log(this.body);
    }); 
  }
}

