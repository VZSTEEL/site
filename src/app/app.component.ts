import { Component } from '@angular/core';
import { EMAIL, PHONE_NUMBER } from '../config';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'vz-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  host: {
    class: 'display-flex-column flex-auto bg-blue height-100'
  }
})
export class AppComponent {
  title = 'vz-steel';
  PHONE_NUMBER = PHONE_NUMBER;
  EMAIL = EMAIL;

  photos = [
    'IMG-20200320-WA0005',
    'IMG-20200320-WA0007',
    'IMG-20200527-WA0003',
    'IMG-20200527-WA0013',
    'IMG-20200527-WA0019',
    'IMG-20200605-WA0003',
    'IMG-20200715-WA0007',
    'IMG-20200910-WA0007',
    'IMG-20200924-WA0001',
    'IMG-20201019-WA0005',
    'IMG-20201130-WA0006',
    'IMG-20201222-WA0002',
    'IMG-20210114-WA0001',
    'IMG-20210324-WA0001',
    'IMG-20210324-WA0019',
    'IMG-20210430-WA0006'
  ];

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
    message += `\nName: ${fromName}\nEmail: ${fromEmail}\nPhone Number: ${phone}`;
    message = message.replace(/\n/g, '%0a');
    const element = document.createElement('a');
    const href = `mailto:${EMAIL}?subject=${subject}&body=${message}`;
    element.setAttribute('href', href);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
}
