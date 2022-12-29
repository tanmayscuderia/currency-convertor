import { NgModule } from '@angular/core';
import { ChosenCurrenciesConvertedGridComponent } from './chosen-currencies-converted-grid.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        ChosenCurrenciesConvertedGridComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [ChosenCurrenciesConvertedGridComponent],
})
export class ChosenCurrenciesConvertedGridModule { }
