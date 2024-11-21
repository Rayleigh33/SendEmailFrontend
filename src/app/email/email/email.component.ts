import { Component } from '@angular/core';
import { EmailServiceService } from 'src/app/service/email-service.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  email = { to: '', subject: '', body: '' };

  constructor(private emailService: EmailServiceService) {}

  sendEmail() {
    this.emailService.sendEmail(this.email).subscribe(
      response => {
        alert('Email sent successfully!');
        console.log(response);
        this.email = { to: '', subject: '', body: '' };
      },
      error => {
        alert('Failed to send email.');
        console.error(error);
      }
    );
  }
}
