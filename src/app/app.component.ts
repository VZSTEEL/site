import { Component } from '@angular/core';
import { EMAIL, GALLERY, PHONE_NUMBER } from 'src/config';
import { FormControl, FormGroup } from '@angular/forms';
import lgFullScreen from 'lightgallery/plugins/fullscreen';
import lgThumb from 'lightgallery/plugins/thumbnail';
import { LightGallerySettings } from 'lightgallery/lg-settings';

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
  PHONE_NUMBER = PHONE_NUMBER;
  EMAIL = EMAIL;
  GALLERY = GALLERY;

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
