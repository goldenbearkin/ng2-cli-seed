import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { Routing } from './auth-flow-widget.routing';
// import { AuthFlowWidgetComponent } from './auth-flow-widget.component';

import { ConfirmPageComponent } from './confirm-page/confirm-page.component';
import { ForgotPasswordPageComponent } from './forgot-password-page/forgot-password-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    Routing
  ],
  declarations: [
    // AuthFlowWidgetComponent,
    ConfirmPageComponent,
    ForgotPasswordPageComponent,
    LoginPageComponent,
    RegisterPageComponent
  ]
})
export class AuthFlowWidgetModule { }
