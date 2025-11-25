import { Component, Injectable } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface MsgData {
  name: string | null;
  email: string | null;
  message: string | null;
}

@Component({
  selector: 'app-contact-us',
  imports: [ ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class ContactUsComponent {
  title = "Contact Us";

  nameControl = new FormControl('');
  emailControl = new FormControl('');
  messageControl = new FormControl('');

  // Set the correct headers for sending JSON data.
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private router: Router, private http: HttpClient) { }

  onSubmit() {
    const msgData: MsgData = {
      name: this.nameControl.value,
      email: this.emailControl.value,
      message: this.messageControl.value,
    };

    console.log("Sending email data:", msgData);

    // Use http.post to send the data to your backend service.
    this.http.post('https://mail-sender-821892242376.us-south1.run.app', msgData, {
      headers: this.httpHeaders,
      observe: 'response' // Observe the full HTTP response.
    }).subscribe({
      next: (response) => {
        console.log('Email data sent successfully', response);
        if (response.status === 200) {
          // Navigate to home only on successful submission.
          this.router.navigate(['/home']);
        } else {
          console.error('Submission failed with status:', response.status);
        }
      },
      error: (error) => {
        console.error('Error sending email data', error);
      },
      complete: () => {
        console.info('HTTP request complete');
      }
    });
  }
}
