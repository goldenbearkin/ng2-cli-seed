import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routing } from './auth-page.routing';
import { AuthPageComponent } from './auth-page.component';

import { AuthFlowWidgetModule } from '../widgets/auth-flow-widget/auth-flow-widget.module';

@NgModule({
  imports: [
    CommonModule,
    Routing,
    AuthFlowWidgetModule
  ],
  declarations: [AuthPageComponent]
})
export class AuthPageModule { }
