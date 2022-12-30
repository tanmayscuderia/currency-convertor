import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { NavbarConfigInterface } from '../../assets/js/interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  navbarOpen = false;
  config!: NavbarConfigInterface;

  @Input() set setConfig(config: NavbarConfigInterface | undefined) {
    this.config = config as NavbarConfigInterface;
  }

  @Output() convertCurrencyOption: EventEmitter<string> = new EventEmitter<string>();

  /**
   * 
   * @param currencyKeys - It sends the from and to currency keys
   *  to be set to perform the currency conversion.
   */
  conversionOptionClicked(currencyKeys?: string) {
    this.convertCurrencyOption.emit(currencyKeys);
  }

  /**
   * Opens or closes navbar in mobile mode. It gets triggered on clicking
   * the hamburger or cross button.
   */
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
