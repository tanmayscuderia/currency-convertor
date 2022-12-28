import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
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
  }

  homeClicked() {
    console.log('home clicked');
  }

  toggleNavbar() {
    console.log('toggle menu clicked');
    this.navbarOpen = !this.navbarOpen;
  }
}
