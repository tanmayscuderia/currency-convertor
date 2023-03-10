import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConvertorConfigInterface } from '../../assets/js/interface';

@Component({
  selector: 'app-convertor',
  templateUrl: './convertor.component.html',
  styleUrls: ['./convertor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConvertorComponent {
  convertorForm!: FormGroup;
  config!: ConvertorConfigInterface;
  symbols!: Map<string, string>;
  convertedValue = 1;

  showCurrencySignInConvertedStatement = true;
  decimalPlacesInConvertedStatement = '.2';

  @Input() set setConfig(config: ConvertorConfigInterface | undefined) {
    this.config = config as ConvertorConfigInterface;

    this.showCurrencySignInConvertedStatement = config?.showCurrencySignInConvertedStatement ?? true;
    this.decimalPlacesInConvertedStatement = config?.decimalPlacesInConvertedStatement ?? '.2';
  }

  @Input() set setSymbols(symbols: Map<string, string> | undefined) {
    this.symbols = symbols as Map<string, string>;
  }

  @Input() set setConvertedValue(convertedValue: number) {
    this.convertedValue = convertedValue;
  }

  @Input() set setFormValues(formValues: FormGroup) {
    this.convertorForm = formValues;
    this.convertCurrency();
  }

  @Output() convertTrigger: EventEmitter<void> = new EventEmitter<void>();

  /**
   * Convert the currency from the from one to tht to one.
   */
  convertCurrency() {
    this.convertTrigger.emit();
  }

  /**
   * Exchange the value of from currency with to currency to get the opposite conversion amount.
   */
  exchangeCurrency() {
    const fromValue = this.convertorForm.value['from'];
    this.convertorForm.controls['from'].setValue(this.convertorForm.value['to']);
    this.convertorForm.controls['to'].setValue(fromValue);
  }
}
 