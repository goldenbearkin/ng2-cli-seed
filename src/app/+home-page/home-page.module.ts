import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { homeRouting } from './home-page.routing';

@NgModule({
  imports: [
    CommonModule,
    homeRouting
  ],
  declarations: [HomePageComponent]
})
export class HomePageModule { }
