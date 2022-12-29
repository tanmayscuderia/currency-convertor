import { ComponentFixture, flush, TestBed } from '@angular/core/testing';
import { NavbarConfigInterface } from '../../assets/js/interface';
import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    component.setConfig = MOCK_CONFIG_DATA;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('config should be set', () => {
    expect(component.config).toBe(MOCK_CONFIG_DATA);
  });

  it('navbarOPen value should change on toggling the navbar hamburger', () => {
    expect(component.navbarOpen).toBe(false);

    component.toggleNavbar();
    expect(component.navbarOpen).toBe(true);


    component.toggleNavbar();
    expect(component.navbarOpen).toBe(false);
  });

  it('should display convertCurrencyOption as defined in config in the navbar', () => {
    const navbarCurrencyOptions = document.getElementsByClassName('nav-link');

    expect(navbarCurrencyOptions.length).toBe(MOCK_CONFIG_DATA.conversionOptions?.length ?? 0);
    expect(navbarCurrencyOptions[0].textContent).toBe('EUR-USD Details');
    expect(navbarCurrencyOptions[1].textContent).toBe('EUR-GBP Details');
  });

  it('should trigger convertCurrencyOption to be emitted with the currency keys', () => {
    spyOn(component.convertCurrencyOption, 'emit');
    const navbarCurrencyOptions = fixture.debugElement.queryAll(By.css('.navbar-nav'));

    navbarCurrencyOptions[0].triggerEventHandler('click');

    expect(component.convertCurrencyOption.emit).toHaveBeenCalledWith('EUR,USD');
  });
});

const MOCK_CONFIG_DATA: NavbarConfigInterface = {
  "brandImageUrl": "assets/icons/currency-exchange.svg",
  "conversionOptions": [
    {
      "label": "EUR-USD Details",
      "keys": "EUR,USD"
    },
    {
      "label": "EUR-GBP Details",
      "keys": "EUR,GBP"
    }
  ]
}
