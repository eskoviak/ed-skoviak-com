import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  onSubmit() {
    console.log('Name: ' + this.nameControl.value);
    console.log('Email: ' + this.emailControl.value);
    console.log('Message: ' + this.messageControl.value);
    this.nameControl.setValue('');
    this.emailControl.setValue('');
    this.messageControl.setValue('');
    // TODO call smtp service
    alert('Message sent');
    this.router.navigate(['/home']);
    

  }

}
