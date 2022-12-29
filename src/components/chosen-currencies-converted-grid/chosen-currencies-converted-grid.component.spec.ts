import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenCurrenciesConvertedGridComponent } from './chosen-currencies-converted-grid.component';

describe('ChosenCurrenciesConvertedGridComponent', () => {
  let component: ChosenCurrenciesConvertedGridComponent;
  let fixture: ComponentFixture<ChosenCurrenciesConvertedGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChosenCurrenciesConvertedGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChosenCurrenciesConvertedGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
