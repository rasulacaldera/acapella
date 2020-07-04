import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  profileForm: FormGroup;
  constructor(private toastr: ToastrService) {}

  ngOnInit() {
    this.profileForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      message: new FormControl('')
    });
  }

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
          this.toastr.success('Email sent');
          this.profileForm.reset();
        },
        error => {
          this.toastr.error('Unable to send email');
        }
      );
  }
}
