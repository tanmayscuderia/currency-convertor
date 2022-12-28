import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { NavbarConfigInterface } from '../../assets/js/interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  navbarOpen: boolean = false;
  config!: NavbarConfigInterface;

  @Input() set setConfig(config: NavbarConfigInterface | undefined) {
    this.config = config as NavbarConfigInterface;
    console.log('header', this.config);
  }

  @Output() convertCurrencyOption: EventEmitter<string> = new EventEmitter<string>();

  conversionOptionClicked(currencyKeys?: string) {
    this.convertCurrencyOption.emit(currencyKeys);
    console.log('home clicked', currencyKeys);
  }

  toggleNavbar() {
    console.log('toggle menu clicked');
    this.navbarOpen = !this.navbarOpen;
  }
}
