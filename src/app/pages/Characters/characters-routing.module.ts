import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { characters } from './characters.page';

const routes: Routes = [
  {
    path: '',
    component: characters,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomePageRoutingModule {}
