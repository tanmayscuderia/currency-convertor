import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './display.component';
import { HeaderModule } from '../header/header.module';
import { DescriptionComponentModule } from '../description/description.module';
import { ConvertorComponentModule } from '../convertor/convertor.module';
import { HttpClientModule } from '@angular/common/http';
import { ChosenCurrenciesConvertedGridModule } from '../chosen-currencies-converted-grid/chosen-currencies-converted-grid.module';
@NgModule({
    declarations: [
        DisplayComponent
    ],
    imports: [
        CommonModule,
        ConvertorComponentModule,
        DescriptionComponentModule,
        ConvertorComponentModule,
        HttpClientModule,
        ChosenCurrenciesConvertedGridModule,
        HeaderModule
    ],
    exports: [DisplayComponent],
})
export class DisplayComponentModule { }
