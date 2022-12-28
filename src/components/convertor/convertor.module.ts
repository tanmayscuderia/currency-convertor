import { NgModule } from '@angular/core';
import { ConvertorComponent } from './convertor.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
    ConvertorComponent,
  ],
    imports: [
      ReactiveFormsModule
    ],
    exports: [ConvertorComponent],
  })
  export class ConvertorComponentModule { }
  