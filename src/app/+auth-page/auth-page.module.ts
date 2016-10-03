import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routing } from './auth-page.routing';
import { AuthPageComponent } from './auth-page.component';

@NgModule({
  imports: [
    CommonModule,
    Routing
  ],
  declarations: [AuthPageComponent]
})
export class AuthPageModule { }
