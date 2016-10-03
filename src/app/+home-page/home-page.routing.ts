import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page.component';

export const homeRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    children: [
      { path: '', component: HomePageComponent }
    ]
  }
]);

