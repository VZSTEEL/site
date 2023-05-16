import { Component } from '@angular/core';
import { COMPANY_NAME, EMAIL, PHONE_NUMBER } from '../../config';

@Component({
  selector: 'vz-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  host: {
    class: 'display-flex flex-cross-center'
  }
})
export class HeaderComponent {
  COMPANY_NAME = COMPANY_NAME;
  PHONE_NUMBER = PHONE_NUMBER;
  EMAIL = EMAIL;
}
