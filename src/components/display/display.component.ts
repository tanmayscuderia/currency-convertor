import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import data from '../../assets/json/config.json';
import { ConfigInterface, DynamicKeyStringValueInterface } from '../../assets/js/interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CurrencyService } from '../../services/currency.service';
import { getConvertedValue } from '../../shared/util';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
  providers: [CurrencyService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayComponent implements OnInit {
  symbols!: Map<string, string>;
  currencyRates!: DynamicKeyStringValueInterface;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyServices();      
  }
  
  configData: ConfigInterface = JSON.parse(JSON.stringify(data));
  
  // Convertor component form group initialsion and current value.
  convertorForm = new FormGroup({
    amount: new FormControl('1', [Validators.required, Validators.pattern("^[0-9]*$")]),
    from: new FormControl('USD'),
    to: new FormControl('GBP')
  });

  setConvertedValue: number = 0;
  
  /**
   * Converts the amount from one currency to another 
   */
  convertCurrency() {
    this.setConvertedValue = getConvertedValue(this.currencyRates, this.convertorForm.value['from']??'', this.convertorForm.value['to']??'', this.convertorForm.value['amount']??'');
  }

  /**
   * Gets the various currency data either from hitting the api or cached in local storage.
   */
  currencyServices() {
    this.symbolsService();
    this.latestValueService();
  }

  /**
    * It calls the symbols service or gets the symbols from local storage.
 */
  symbolsService() {
    if (localStorage.getItem('symbols') === null) {
      this.currencyService.getAllSymbols().subscribe((response) => {
        if (response.success) {
          localStorage.setItem('symbols', JSON.stringify(response));
          this.symbols =  this.convertSymbolsIntoMap(response.symbols);
        }
      }, (error) => {
        console.log('Symbols list service failed', error);
      });
    } else {
      const getSymbols = JSON.parse(localStorage.getItem('symbols') ?? '');
      this.symbols =  this.convertSymbolsIntoMap(getSymbols.symbols);
      console.log('symbols', this.symbols);
    }
  }

  /**
    * It calls the latest value service or gets the latest value from local storage.
 */
  latestValueService() {
    if (localStorage.getItem('latestService') === null) {
      this.currencyService.latestService('USD').subscribe((response) => {
        this.currencyRates = response.rates;
        const responeJSON = JSON.stringify(response);
        localStorage.setItem('latestService', responeJSON);
      },
        (error) => {
          console.log('Request failed error message', error);
        }
      );
    } else {
      const latestValues = JSON.parse(localStorage.getItem('latestService') ?? '');
      this.currencyRates = latestValues.rates;
    }
  }

  /**
   * 
   * @param symbols - The symbols list comes in the form of an object.
   * @returns - It returns with the currency symbol as key and description as value.
   */
  convertSymbolsIntoMap(symbols?: DynamicKeyStringValueInterface): Map<string, string> {
    return new Map(Object.entries(symbols??''));
  }

  /**
   * 
   * @param options - The symbols for from and to currency.
   * It sets the from and to currency based on the option chosen form the navbar.
   */
  setConvertOptionFromNavber(options: any) {
    const optionValues = options.split(',');
    
    if(options) {
      this.convertorForm.controls['from'].setValue(optionValues[0]);
      this.convertorForm.controls['to'].setValue(optionValues[1]);
      this.convertCurrency();
    }
  }
}
