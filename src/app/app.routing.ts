import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomePageModule } from './+home-page/home-page.module';

export const appRouting: ModuleWithProviders = RouterModule.forRoot([
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => HomePageModule }
   // { path: '**', component: PageNotFoundComponent }
]);

