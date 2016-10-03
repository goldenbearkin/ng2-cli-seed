import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthPageComponent } from './auth-page.component';

export const Routing: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    children: [
      { path: '', component: AuthPageComponent }
    ]
  }
]);

