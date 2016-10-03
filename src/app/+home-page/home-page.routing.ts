import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page.component';

export const Routing: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    children: [
      { path: '', component: HomePageComponent }
    ]
  }
]);

