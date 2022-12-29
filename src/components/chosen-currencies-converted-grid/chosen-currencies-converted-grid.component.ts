import { Component, Input } from '@angular/core';
import { DynamicKeyStringValueInterface, ConversionOptionsInterface } from '../../assets/js/interface';
import { getConvertedValue } from '../../shared/util';

@Component({
  selector: 'app-chosen-currencies-converted-grid',
  templateUrl: './chosen-currencies-converted-grid.component.html',
  styleUrls: ['./chosen-currencies-converted-grid.component.scss']
})
export class ChosenCurrenciesConvertedGridComponent {
  config!: ConversionOptionsInterface;
  currencyRates!: DynamicKeyStringValueInterface;

  @Input() set setConfig(config: ConversionOptionsInterface | undefined) {
    this.config = config as ConversionOptionsInterface;
  }

  @Input() set setCurrencyRates(currencyRates: DynamicKeyStringValueInterface) {
    this.currencyRates = currencyRates;
    console.log('currencyRates', this.currencyRates);
  }
 
  fromCurrency(option: string) {
    const currencies = option.split('-');
    return currencies[0];
  }

  toCurrency(option: string) {
    const currencies = option.split('-');
    return currencies[1];
  }

  convertedValue(option: string) {
    const currencies = option.split('-');
    return getConvertedValue(this.currencyRates, currencies[0]??'', currencies[1]??'', '1');
  }
}
