import { Component, Injectable } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

interface MsgData {
  name: string | null;
  email: string | null;
  message: string | null;
}



@Component({
  selector: 'app-contact-us',
  imports: [ ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})

@Injectable({
  providedIn: 'root'
})
export class ContactUsComponent {
  title = "Contact Us"
  
  nameControl = new FormControl('');
  emailControl = new FormControl('');
  messageControl = new FormControl('');

  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'User-Agent': 'Angular ESC',
    'Accept': '*/*',
    'Access-Control-Allow-Origin': '*',
    'Connection': 'keep-alive',
    'Access-Control-Request-Method' : 'POST',
    'Access-Control-Request-Headers': 'content-type,x-pingother',
  })
  
  constructor(private router: Router, private http: HttpClient) { }

  onSubmit() {
    const msgData: MsgData = {
      name: this.nameControl.value,
      email: this.emailControl.value,
      message: this.messageControl.value,
    }


    console.log(JSON.stringify(msgData));
    /*
    this.http.post<any>('https://mail-sender-821892242376.us-south1.run.app',
      JSON.stringify(msgData),
      { 
        headers: this.httpHeaders,
        observe: "events"
      }
      ).subscribe({
      next (v) { console.log("next: ", v)},
      error (e) {console.error("error: ", e)},
      complete () {console.info('complete')}
    });
    */

    this.http.request('POST', 'https://mail-sender-821892242376.us-south1.run.app',
      {
        body: JSON.stringify(msgData),
        headers: this.httpHeaders,
        observe: "response"
      }
    ).subscribe({
      next (v) { console.log("next: ", v)},
      error (e) {console.error("error: ", e)},
      complete () {console.info('complete')}
    });

    this.router.navigate(['/home']);
  }
}
