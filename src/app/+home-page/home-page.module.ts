import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { Routing } from './home-page.routing';

@NgModule({
  imports: [
    CommonModule,
    Routing
  ],
  declarations: [HomePageComponent]
})
export class HomePageModule { }
