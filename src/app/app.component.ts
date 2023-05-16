import { Component } from '@angular/core';
import { EMAIL, PHONE_NUMBER } from '../config';

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
}
