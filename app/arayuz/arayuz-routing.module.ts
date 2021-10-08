import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArayuzPage } from './arayuz.page';

const routes: Routes = [
  {
    path: '',
    component: ArayuzPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArayuzPageRoutingModule {}
