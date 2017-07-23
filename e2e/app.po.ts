import { browser, element, by } from 'protractor';

export class AngularElectronPage {
  navigateTo(route: string) {
    return browser.get(route);
  }
}
