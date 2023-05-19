import { Component } from '@angular/core';
import { IConfig } from '../../app.types';

@Component({
  selector: 'vz-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  COMPANY_NAME = this.config.companyName;
  PHONE_NUMBER = this.config.companyPhoneNumber;
  EMAIL = this.config.companyEmail;

  constructor(private config: IConfig) {}
}
