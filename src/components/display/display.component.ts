import { Component, ChangeDetectionStrategy } from '@angular/core';
import data from '../../assets/json/config.json';
import { ConfigInterface } from '../../assets/js/interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayComponent {
  configData: ConfigInterface = JSON.parse(JSON.stringify(data));

  convertorForm = new FormGroup({
    amount: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    from: new FormControl('2'),
    to: new FormControl('3')
  });

  convertCurrency() {
    console.log('c', this.convertorForm.value);
  }
}
