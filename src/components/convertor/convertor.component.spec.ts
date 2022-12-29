import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ConvertorConfigInterface } from '../../assets/js/interface';
import { ConvertorComponent } from './convertor.component';
import { By } from '@angular/platform-browser';

describe('ConvertorComponent', () => {
  let component: ConvertorComponent;
  let fixture: ComponentFixture<ConvertorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConvertorComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ConvertorComponent);
    component = fixture.componentInstance;
    component.setConfig = MOCK_CONFIG_DATA;
    component.setFormValues = MOCK_FORM_GROUP;
    component.setConvertedValue = 0;
    component.setSymbols = MOCK_SYMBOLS_MAP;
    fixture.detectChanges();
  });

  it('should create', () => {
    // expect(component.symbols).toContain('');
    expect(component).toBeTruthy();
  });

  it('should set config', () => {
    expect(component.config).toBe(MOCK_CONFIG_DATA);
  });

  it('should set convertorForm', () => {
    expect(component.convertorForm.value).toEqual({ amount: '1', from: 'USD', to: 'GBP' });
  });

  it('should set symbols', () => {
    expect(component.symbols).toBe(MOCK_SYMBOLS_MAP);
  });

  it('should swap from and to currencies on clicking the swap button', ()=> {
    const swapButton = fixture.debugElement.queryAll(By.css('.convert-form-reverse'));
    expect(component.convertorForm.value).toEqual({ amount: '1', from: 'USD', to: 'GBP' });

    swapButton[0].triggerEventHandler('click');
    expect(component.convertorForm.value).toEqual({ amount: '1', from: 'GBP', to: 'USD' });

    swapButton[0].triggerEventHandler('click');
    expect(component.convertorForm.value).toEqual({ amount: '1', from: 'USD', to: 'GBP' });
  });

  it('convert button should have convert text on it', () => {
    const convertButton = document.getElementsByClassName('btn')[0];

    expect(convertButton.textContent).toBe('Convert');
  });

  it('should emit convertTrigger emitter when form submitted', () => {
    spyOn(component.convertTrigger, 'emit');
    const convertButton = fixture.debugElement.queryAll(By.css('form'));

    convertButton[0].triggerEventHandler('ngSubmit');
    expect(component.convertTrigger.emit).toHaveBeenCalledWith();
  });
});

const MOCK_CONFIG_DATA: ConvertorConfigInterface = {
  "exchangeImageUrl": "assets/icons/exchange.svg",
  "showCurrencySignInConvertedStatement": true,
  "decimalPlacesInConvertedStatement": ".2"
};

const MOCK_FORM_GROUP: FormGroup = new FormGroup({
  amount: new FormControl('1', [Validators.required, Validators.pattern("^[0-9]*$")]),
  from: new FormControl('USD'),
  to: new FormControl('GBP')
});

const MOCK_SYMBOLS = {
  "AED": "United Arab Emirates Dirham",
  "AFN": "Afghan Afghani",
  "ALL": "Albanian Lek",
  "AMD": "Armenian Dram",
  "ANG": "Netherlands Antillean Guilder",
  "AOA": "Angolan Kwanza",
  "ARS": "Argentine Peso",
  "AUD": "Australian Dollar",
  "AWG": "Aruban Florin",
  "AZN": "Azerbaijani Manat",
  "BAM": "Bosnia-Herzegovina Convertible Mark",
  "BBD": "Barbadian Dollar",
  "BDT": "Bangladeshi Taka",
  "BGN": "Bulgarian Lev",
  "BHD": "Bahraini Dinar",
  "BIF": "Burundian Franc",
  "BMD": "Bermudan Dollar",
  "BND": "Brunei Dollar",
  "BOB": "Bolivian Boliviano",
  "BRL": "Brazilian Real",
  "BSD": "Bahamian Dollar",
  "BTC": "Bitcoin",
  "BTN": "Bhutanese Ngultrum",
  "BWP": "Botswanan Pula",
  "BYN": "New Belarusian Ruble",
  "BYR": "Belarusian Ruble",
  "BZD": "Belize Dollar",
  "CAD": "Canadian Dollar",
  "CDF": "Congolese Franc",
  "CHF": "Swiss Franc",
  "CLF": "Chilean Unit of Account (UF)",
  "CLP": "Chilean Peso",
  "CNY": "Chinese Yuan",
  "COP": "Colombian Peso",
  "CRC": "Costa Rican Colón",
  "CUC": "Cuban Convertible Peso",
  "CUP": "Cuban Peso",
  "CVE": "Cape Verdean Escudo",
  "CZK": "Czech Republic Koruna",
  "DJF": "Djiboutian Franc",
  "DKK": "Danish Krone",
  "DOP": "Dominican Peso",
  "DZD": "Algerian Dinar",
  "EGP": "Egyptian Pound",
  "ERN": "Eritrean Nakfa",
  "ETB": "Ethiopian Birr",
  "EUR": "Euro",
  "FJD": "Fijian Dollar",
  "FKP": "Falkland Islands Pound",
  "GBP": "British Pound Sterling",
  "GEL": "Georgian Lari",
  "GGP": "Guernsey Pound",
  "GHS": "Ghanaian Cedi",
  "GIP": "Gibraltar Pound",
  "GMD": "Gambian Dalasi",
  "GNF": "Guinean Franc",
  "GTQ": "Guatemalan Quetzal",
  "GYD": "Guyanaese Dollar",
  "HKD": "Hong Kong Dollar",
  "HNL": "Honduran Lempira",
  "HRK": "Croatian Kuna",
  "HTG": "Haitian Gourde",
  "HUF": "Hungarian Forint",
  "IDR": "Indonesian Rupiah",
  "ILS": "Israeli New Sheqel",
  "IMP": "Manx pound",
  "INR": "Indian Rupee",
  "IQD": "Iraqi Dinar",
  "IRR": "Iranian Rial",
  "ISK": "Icelandic Króna",
  "JEP": "Jersey Pound",
  "JMD": "Jamaican Dollar",
  "JOD": "Jordanian Dinar",
  "JPY": "Japanese Yen",
  "KES": "Kenyan Shilling",
  "KGS": "Kyrgystani Som",
  "KHR": "Cambodian Riel",
  "KMF": "Comorian Franc",
  "KPW": "North Korean Won",
  "KRW": "South Korean Won",
  "KWD": "Kuwaiti Dinar",
  "KYD": "Cayman Islands Dollar",
  "KZT": "Kazakhstani Tenge",
  "LAK": "Laotian Kip",
  "LBP": "Lebanese Pound",
  "LKR": "Sri Lankan Rupee",
  "LRD": "Liberian Dollar",
  "LSL": "Lesotho Loti",
  "LTL": "Lithuanian Litas",
  "LVL": "Latvian Lats",
  "LYD": "Libyan Dinar",
  "MAD": "Moroccan Dirham",
  "MDL": "Moldovan Leu",
  "MGA": "Malagasy Ariary",
  "MKD": "Macedonian Denar",
  "MMK": "Myanma Kyat",
  "MNT": "Mongolian Tugrik",
  "MOP": "Macanese Pataca",
  "MRO": "Mauritanian Ouguiya",
  "MUR": "Mauritian Rupee",
  "MVR": "Maldivian Rufiyaa",
  "MWK": "Malawian Kwacha",
  "MXN": "Mexican Peso",
  "MYR": "Malaysian Ringgit",
  "MZN": "Mozambican Metical",
  "NAD": "Namibian Dollar",
  "NGN": "Nigerian Naira",
  "NIO": "Nicaraguan Córdoba",
  "NOK": "Norwegian Krone",
  "NPR": "Nepalese Rupee",
  "NZD": "New Zealand Dollar",
  "OMR": "Omani Rial",
  "PAB": "Panamanian Balboa",
  "PEN": "Peruvian Nuevo Sol",
  "PGK": "Papua New Guinean Kina",
  "PHP": "Philippine Peso",
  "PKR": "Pakistani Rupee",
  "PLN": "Polish Zloty",
  "PYG": "Paraguayan Guarani",
  "QAR": "Qatari Rial",
  "RON": "Romanian Leu",
  "RSD": "Serbian Dinar",
  "RUB": "Russian Ruble",
  "RWF": "Rwandan Franc",
  "SAR": "Saudi Riyal",
  "SBD": "Solomon Islands Dollar",
  "SCR": "Seychellois Rupee",
  "SDG": "Sudanese Pound",
  "SEK": "Swedish Krona",
  "SGD": "Singapore Dollar",
  "SHP": "Saint Helena Pound",
  "SLE": "Sierra Leonean Leone",
  "SLL": "Sierra Leonean Leone",
  "SOS": "Somali Shilling",
  "SRD": "Surinamese Dollar",
  "STD": "São Tomé and Príncipe Dobra",
  "SVC": "Salvadoran Colón",
  "SYP": "Syrian Pound",
  "SZL": "Swazi Lilangeni",
  "THB": "Thai Baht",
  "TJS": "Tajikistani Somoni",
  "TMT": "Turkmenistani Manat",
  "TND": "Tunisian Dinar",
  "TOP": "Tongan Paʻanga",
  "TRY": "Turkish Lira",
  "TTD": "Trinidad and Tobago Dollar",
  "TWD": "New Taiwan Dollar",
  "TZS": "Tanzanian Shilling",
  "UAH": "Ukrainian Hryvnia",
  "UGX": "Ugandan Shilling",
  "USD": "United States Dollar",
  "UYU": "Uruguayan Peso",
  "UZS": "Uzbekistan Som",
  "VEF": "Venezuelan Bolívar Fuerte",
  "VES": "Sovereign Bolivar",
  "VND": "Vietnamese Dong",
  "VUV": "Vanuatu Vatu",
  "WST": "Samoan Tala",
  "XAF": "CFA Franc BEAC",
  "XAG": "Silver (troy ounce)",
  "XAU": "Gold (troy ounce)",
  "XCD": "East Caribbean Dollar",
  "XDR": "Special Drawing Rights",
  "XOF": "CFA Franc BCEAO",
  "XPF": "CFP Franc",
  "YER": "Yemeni Rial",
  "ZAR": "South African Rand",
  "ZMK": "Zambian Kwacha (pre-2013)",
  "ZMW": "Zambian Kwacha",
  "ZWL": "Zimbabwean Dollar"
}

const MOCK_SYMBOLS_MAP = new Map(Object.entries(MOCK_SYMBOLS ?? ''));