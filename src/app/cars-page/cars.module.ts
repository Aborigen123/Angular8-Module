import { NgModule } from '@angular/core';
import { CarsPageComponent } from './cars-page.component';
import { CarPageComponent } from './car-page/car-page.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [CarsPageComponent, CarPageComponent],
    imports: [
        CommonModule
    ],
})

export class CarsModule{}