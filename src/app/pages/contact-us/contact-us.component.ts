import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  constructor(private toastr: ToastrService) {}

  ngOnInit() {}

  sendEmail(e: Event) {
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
          this.toastr.success('Email sent');
        },
        error => {
          console.log(error.text);
        }
      );
  }
}
