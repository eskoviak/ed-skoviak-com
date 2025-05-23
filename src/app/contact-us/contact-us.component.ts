import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

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
export class ContactUsComponent {
  title = "Contact Us"
  
  nameControl = new FormControl('');
  emailControl = new FormControl('');
  messageControl = new FormControl('');

  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  })
  /*
  httpParams = new HttpParams({
    fromObject: {
      name: this.nameControl.value,
      email: this.emailControl.value,
      message: this.messageControl.value,
    }
  */    
  

  constructor(private router: Router, private http: HttpClient) { }

  onSubmit() {
    //console.log('Name: ' + this.nameControl.value);
    //console.log('Email: ' + this.emailControl.value);
    //console.log('Message: ' + this.messageControl.value);
    const msgData: MsgData = {
      name: this.nameControl.value,
      email: this.emailControl.value,
      message: this.messageControl.value,
    }
    //console.log(msgData);
    this.sendMessage(msgData);

    //this.nameControl.setValue('');
    //this.emailControl.setValue('');
    //this.messageControl.setValue('');
    
    this.router.navigate(['/home']);
    

  }

  sendMessage(data: any) {
    //console.log(body)

    this.http.post('https://mail-sender-821892242376.us-south1.run.app',
      data,
      {
        headers: this.httpHeaders,
        responseType: 'text'
      }).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => console.info('complete')}
    );
  }
}
