import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArenasPage } from './arenas.page';

const routes: Routes = [
  {
    path: '',
    component: ArenasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArenasPageRoutingModule {}
