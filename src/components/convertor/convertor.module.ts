import { NgModule } from '@angular/core';
import { ConvertorComponent } from './convertor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
    ConvertorComponent,
  ],
    imports: [
      ReactiveFormsModule,
      CommonModule
    ],
    exports: [ConvertorComponent],
  })
  export class ConvertorComponentModule { }
  