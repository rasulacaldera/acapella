import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm(
        'gmail',
        'template_1Sbs6Jqq',
        e.target as HTMLFormElement,
        'user_pSEgpugwfCXld8vjOSJaP'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
  }
}
