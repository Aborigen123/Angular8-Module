import { Routes, RouterModule } from '@angular/router';
import { CarsPageComponent } from './cars-page/cars-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import {  NgModule } from '@angular/core';
import { CarPageComponent } from './cars-page/car-page/car-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth-guard.service';
import { NewPageComponent } from './new-page/new-page.component';

const appRouts: Routes = [
 //   {path: 'cars', component: CarsPageComponent},//localhost:4200/cars
 {path: 'cars', component: CarsPageComponent, children: [ //для того щоб вирішити проблему з children в cars-page.component.html  ми добавляємо <router-outlet></router-outlet>  //, canActivate:[AuthGuard]
  //   {path: 'cars/:id', component: CarPageComponent}
   {path: 'cars/:id/:name', component: CarPageComponent} 
] 
},
    {path: '', component: HomePageComponent},
    {path: 'new', component: NewPageComponent},
   // {path: '**', component: NotFoundComponent}//при помилці буде викликатися ця сторынка
   {path: 'not-found', component: NotFoundComponent},  
   {path: '**', redirectTo: 'not-found'} ,//редірект
];

   
 @NgModule({
    imports: [RouterModule.forRoot(appRouts)],
    exports: [RouterModule]
 })
export class AppRoutingModule{

}