import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionComponent } from './description.component';
import { DescriptionConfigInterface } from '../../assets/js/interface';

describe('DescriptionComponent', () => {
  let component: DescriptionComponent;
  let fixture: ComponentFixture<DescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionComponent);
    component = fixture.componentInstance;
    component.setConfig = MOCK_CONFIG_DATA;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set config', () => {
    expect(component.config).toBe(MOCK_CONFIG_DATA);
  });

  it('heading should be same as in heading property of config', ()=> {
    const heading = document.getElementsByClassName('description-heading')[0];

    expect(heading.textContent).toBe(MOCK_CONFIG_DATA?.heading??'');
  });

  it('sub heading should be same as in subHeading property of config', ()=> {
    const heading = document.getElementsByClassName('description-subheading')[0];

    expect(heading.textContent).toBe(MOCK_CONFIG_DATA?.subHeading??'');
  });
});

const MOCK_CONFIG_DATA: DescriptionConfigInterface = {
  "heading": "Currency Convertor",
  "subHeading": "It helps you to check live currency exchange rates"
}
