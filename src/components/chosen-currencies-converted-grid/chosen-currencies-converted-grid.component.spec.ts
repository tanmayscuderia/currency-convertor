import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenCurrenciesConvertedGridComponent } from './chosen-currencies-converted-grid.component';
import { DynamicKeyStringValueInterface, ConversionOptionsInterface } from '../../assets/js/interface';

describe('ChosenCurrenciesConvertedGridComponent', () => {
  let component: ChosenCurrenciesConvertedGridComponent;
  let fixture: ComponentFixture<ChosenCurrenciesConvertedGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChosenCurrenciesConvertedGridComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ChosenCurrenciesConvertedGridComponent);
    component = fixture.componentInstance;
    component.setConfig = MOCK_CONFIG_DATA;
    component.setCurrencyRates = MOCK_CURRENCY_RATES;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create conversions', () => {
    const text = document.getElementsByClassName('currencies-card-container');

    expect(text.length).toBe(9);
    expect((text[0].textContent)).toContain('€1.00 EUR = $1.06 USD');
    expect((text[5].textContent)).toContain('$1.00 USD = £0.83 GBP');
    expect((text[8].textContent)).toContain('AED1.00 AED = ₹22.56 INR');
  })
});

const MOCK_CONFIG_DATA: ConversionOptionsInterface =
{
  "selectedCurrencies": [
    "EUR-USD",
    "EUR-GBP",
    "EUR-INR",
    "EUR-AED",
    "USD-INR",
    "USD-GBP",
    "USD-AED",
    "GBP-INR",
    "AED-INR"
  ],
  "showCurrencySignInConvertedStatement": true,
  "decimalPlacesInConvertedStatement": ".2"
}

const MOCK_CURRENCY_RATES: DynamicKeyStringValueInterface = {
  "AED": 3.672598,
  "AFN": 87.503383,
  "ALL": 106.449787,
  "AMD": 393.269673,
  "ANG": 1.803513,
  "AOA": 503.700502,
  "ARS": 176.371681,
  "AUD": 1.484153,
  "AWG": 1.8,
  "AZN": 1.701546,
  "BAM": 1.838031,
  "BBD": 2.020506,
  "BDT": 106.113769,
  "BGN": 1.842724,
  "BHD": 0.377019,
  "BIF": 2062,
  "BMD": 1,
  "BND": 1.347818,
  "BOB": 6.914829,
  "BRL": 5.258401,
  "BSD": 1.000667,
  "BTC": 0.000060258304,
  "BTN": 82.885282,
  "BWP": 12.845906,
  "BYN": 2.525832,
  "BYR": 19600,
  "BZD": 2.017123,
  "CAD": 1.360698,
  "CDF": 2029.999836,
  "CHF": 0.92904,
  "CLF": 0.031276,
  "CLP": 862.999737,
  "CNY": 6.978698,
  "COP": 4773.49,
  "CRC": 581.191441,
  "CUC": 1,
  "CUP": 26.5,
  "CVE": 104.24994,
  "CZK": 22.81805,
  "DJF": 177.720098,
  "DKK": 7.00765,
  "DOP": 56.050169,
  "DZD": 137.374009,
  "EGP": 24.767802,
  "ERN": 15,
  "ETB": 53.601504,
  "EUR": 0.94239,
  "FJD": 2.206101,
  "FKP": 0.831257,
  "GBP": 0.83165,
  "GEL": 2.699831,
  "GGP": 0.831257,
  "GHS": 9.74979,
  "GIP": 0.831257,
  "GMD": 62.000099,
  "GNF": 8779.99985,
  "GTQ": 7.850464,
  "GYD": 209.48416,
  "HKD": 7.79405,
  "HNL": 24.680479,
  "HRK": 7.1148,
  "HTG": 147.102219,
  "HUF": 378.590084,
  "IDR": 15789.9,
  "ILS": 3.538398,
  "IMP": 0.831257,
  "INR": 82.838023,
  "IQD": 1460.5,
  "IRR": 41800.000085,
  "ISK": 143.160143,
  "JEP": 0.831257,
  "JMD": 153.071639,
  "JOD": 0.709303,
  "JPY": 134.470502,
  "KES": 123.404944,
  "KGS": 85.679859,
  "KHR": 4117.00034,
  "KMF": 463.325033,
  "KPW": 899.980871,
  "KRW": 1274.95007,
  "KWD": 0.30635,
  "KYD": 0.833858,
  "KZT": 463.581387,
  "LAK": 17344.999836,
  "LBP": 1523.000128,
  "LKR": 365.754213,
  "LRD": 154.475012,
  "LSL": 17.120095,
  "LTL": 2.95274,
  "LVL": 0.60489,
  "LYD": 4.82502,
  "MAD": 10.47982,
  "MDL": 19.173374,
  "MGA": 4465.000386,
  "MKD": 57.903937,
  "MMK": 2101.460591,
  "MNT": 3445.896002,
  "MOP": 8.028268,
  "MRO": 356.999828,
  "MUR": 43.647877,
  "MVR": 15.411164,
  "MWK": 1023.505548,
  "MXN": 19.424799,
  "MYR": 4.4225,
  "MZN": 63.830327,
  "NAD": 17.119858,
  "NGN": 446.639756,
  "NIO": 36.3947,
  "NOK": 9.89746,
  "NPR": 132.616602,
  "NZD": 1.58563,
  "OMR": 0.384925,
  "PAB": 1.000667,
  "PEN": 3.810504,
  "PGK": 3.519616,
  "PHP": 56.140973,
  "PKR": 226.374976,
  "PLN": 4.419299,
  "PYG": 7322.500916,
  "QAR": 3.641499,
  "RON": 4.659027,
  "RSD": 110.589756,
  "RUB": 72.750066,
  "RWF": 1065,
  "SAR": 3.759445,
  "SBD": 8.2544,
  "SCR": 13.256975,
  "SDG": 571.999865,
  "SEK": 10.47304,
  "SGD": 1.35002,
  "SHP": 1.377402,
  "SLE": 18.689459,
  "SLL": 18825.000269,
  "SOS": 569.502803,
  "SRD": 31.856498,
  "STD": 20697.981008,
  "SVC": 8.755838,
  "SYP": 2512.464671,
  "SZL": 17.120077,
  "THB": 34.80301,
  "TJS": 10.227239,
  "TMT": 3.5,
  "TND": 3.124028,
  "TOP": 2.353894,
  "TRY": 18.717401,
  "TTD": 6.793786,
  "TWD": 30.807197,
  "TZS": 2333.999717,
  "UAH": 36.957386,
  "UGX": 3734.552528,
  "USD": 1,
  "UYU": 38.621733,
  "UZS": 11204.999804,
  "VEF": 1653026.122573,
  "VES": 16.545797,
  "VND": 23635,
  "VUV": 119.041459,
  "WST": 2.724427,
  "XAF": 616.448797,
  "XAG": 0.042563,
  "XAU": 0.000554,
  "XCD": 2.70255,
  "XDR": 0.75191,
  "XOF": 615.000113,
  "XPF": 112.649829,
  "YER": 250.349902,
  "ZAR": 17.11898,
  "ZMK": 9001.197417,
  "ZMW": 17.997538,
  "ZWL": 321.999592
}