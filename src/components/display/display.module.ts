import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './display.component';
import { HeaderComponent } from '../header/header.component';
import { DescriptionComponentModule } from '../description/description.module';
import { ConvertorComponentModule } from '../convertor/convertor.module';
import { HttpClientModule } from '@angular/common/http';
import { ChosenCurrenciesConvertedGridModule } from '../chosen-currencies-converted-grid/chosen-currencies-converted-grid.module';
@NgModule({
    declarations: [
        DisplayComponent,
        HeaderComponent,
    ],
    imports: [
        CommonModule,
        ConvertorComponentModule,
        DescriptionComponentModule,
        ConvertorComponentModule,
        HttpClientModule,
        ChosenCurrenciesConvertedGridModule
    ],
    exports: [DisplayComponent],
})
export class DisplayComponentModule { }
