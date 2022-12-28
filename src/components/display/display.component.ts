import { Component, ChangeDetectionStrategy } from '@angular/core';
import data from '../../assets/json/config.json';
import { ConfigInterface, SymbolsInterface } from '../../assets/js/interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
  providers: [CurrencyService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayComponent {
  symbols!: Map<string, string>;

  constructor(private currencyService: CurrencyService) {
    this.currencyServices();
  }

  configData: ConfigInterface = JSON.parse(JSON.stringify(data));

  convertorForm = new FormGroup({
    amount: new FormControl('1', [Validators.required, Validators.pattern("^[0-9]*$")]),
    from: new FormControl('USD'),
    to: new FormControl('GBP')
  });
  
  convertCurrency() {
    console.log('c', this.convertorForm.value);
  }

  /**
   * Gets the various currency data either from hitting the api or cached in local storage.
   */
  currencyServices() {
    console.log('hi', localStorage.getItem('latestService'));

    // if (localStorage.getItem('latestService') === null) {
    //   this.currencyService.latestService('symbols', 'USD').subscribe((response) => {
    //     const responeJSON = JSON.stringify(response);
    //     console.log('response', response);
    //     console.log('response json', responeJSON);
    //     localStorage.setItem('latestService', responeJSON);
    //   },
    //     (error) => {
    //       console.log('Request failed error message', error);
    //     }
    //   );
    // }

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
    }
  }

  /**
   * 
   * @param symbols - The symbols list comes in the form of an object.
   * @returns - It returns with the currency symbol as key and deescription as value.
   */
  convertSymbolsIntoMap(symbols?: SymbolsInterface): Map<string, string> {
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
    }
  }
}
