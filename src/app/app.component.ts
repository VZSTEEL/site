import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import lgFullScreen from 'lightgallery/plugins/fullscreen';
import lgThumb from 'lightgallery/plugins/thumbnail';
import { LightGallerySettings } from 'lightgallery/lg-settings';
import { IConfig } from '../app.types';

@Component({
  selector: 'vz-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  host: {
    class: 'd-flex flex-column flex-auto bg-blue h-100'
  }
})
export class AppComponent {
  title = 'vz-steel';
  PHONE_NUMBER = this.config.companyPhoneNumber;
  EMAIL = this.config.companyEmail;
  GALLERY = this.config.gallery;
  ABOUT = this.config.aboutCompany;
  formSubmitDisabled: boolean = false;

  constructor(private config: IConfig) {}

  lightGallerySettings: LightGallerySettings = {
    counter: false,
    download: false,
    plugins: [lgFullScreen, lgThumb],
  };

  form = new FormGroup({
    fromName: new FormControl<string>(''),
    fromEmail: new FormControl<string>(''),
    subject: new FormControl<string>(''),
    phone: new FormControl<string>(''),
    message: new FormControl<string>(''),
  });

  sendEmail(): void {
    let { fromName, fromEmail, subject, phone, message } = this.form.value;
    message = message || '';
    message += '\n--------------------------------------------------------------';
    message += `\nPhone Number: ${phone}`;

    this.formSubmitDisabled = true;

    fetch(`https://formsubmit.co/ajax/${this.EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: fromName,
        message,
        _subject: subject,
        email: fromEmail
      })
    })
      .then(response => response.json())
      .then(data => {
        this.formSubmitDisabled = false;
        this.form.reset();
      })
      .catch(error => {
        this.formSubmitDisabled = false;
        console.log(error)
      });

    // const element = document.createElement('a');
    // const href = `mailto:${this.EMAIL}?subject=${subject}&body=${message}`;
    // element.setAttribute('href', href);
    // element.style.display = 'none';
    // document.body.appendChild(element);
    // element.click();
    // document.body.removeChild(element);
  }
}
