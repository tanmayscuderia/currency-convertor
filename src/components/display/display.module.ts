import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './display.component';
import { HeaderComponent } from '../header/header.component';
import { DescriptionComponentModule } from '../description/description.module';
import { ConvertorComponentModule } from '../convertor/convertor.module';

@NgModule({
    declarations: [
        DisplayComponent,
        HeaderComponent,
    ],
    imports: [
        CommonModule,
        ConvertorComponentModule,
        DescriptionComponentModule,
        ConvertorComponentModule
    ],
    exports: [DisplayComponent],
})
export class DisplayComponentModule { }
