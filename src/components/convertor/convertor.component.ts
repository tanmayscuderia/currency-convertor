import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  @Input() set setConfig(config: ConvertorConfigInterface | undefined) {
    this.config = config as ConvertorConfigInterface;
  }

  @Input() set formValues(formValues: FormGroup) {
    this.convertorForm = formValues;
  }

  @Output() convertTrigger: EventEmitter<boolean> = new EventEmitter<boolean>();

  /**
   * Convert the currency from the from one to tht to one.
   */
  convertCurrency() {
    console.log('save button clicked');
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
