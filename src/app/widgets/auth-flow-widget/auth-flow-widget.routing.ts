import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ConfirmPageComponent } from './confirm-page/confirm-page.component';
import { ForgotPasswordPageComponent } from './forgot-password-page/forgot-password-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

export const Routing: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    children: [
      { path: '', redirectTo: 'login' },
      { path: 'confirm', component: ConfirmPageComponent },
      { path: 'forgot-password', component: ForgotPasswordPageComponent },
      { path: 'login', component: LoginPageComponent },
      { path: 'register', component: RegisterPageComponent },
    ]
  }
]);

