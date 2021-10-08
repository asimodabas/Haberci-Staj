import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnuttumPage } from './unuttum.page';

const routes: Routes = [
  {
    path: '',
    component: UnuttumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnuttumPageRoutingModule {}
