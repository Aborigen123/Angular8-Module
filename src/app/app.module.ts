import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CarsService } from './cars.service';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { NewPageComponent } from './new-page/new-page.component';
import { HeaderComponent } from './header/header.component';
import { CarsModule } from './cars-page/cars.module';

// const appRouts: Routes = [
//   {path: 'cars', component: CarsPageComponent},//localhost:4200/cars
//   {path: '', component: HomePageComponent}
//  ];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NotFoundComponent,
    NewPageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    CarsModule
   // RouterModule.forRoot(appRouts)
  ],
  providers: [ AuthService, AuthGuard], //CarsService
  bootstrap: [AppComponent]
})
export class AppModule { }
