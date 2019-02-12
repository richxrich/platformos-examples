import { Selector } from 'testcafe';

export default class LogInRecaptcha {
  constructor() {
    this.URL = {
      staging: 'https://nearme-example.staging.oregon.platform-os.com/sign-in-recaptcha'
    };
    this.reCaptcha = {
      iframe: Selector('iframe:nth-of-type(1)'),
      checkBoxRecaptcha: Selector('#recaptcha-anchor')
    };
    this.link = {
      documentation: Selector('a').withText('Adding reCaptcha Spam Protection')
    };
  }
}
