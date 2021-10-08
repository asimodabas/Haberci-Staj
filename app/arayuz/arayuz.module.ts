import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArayuzPageRoutingModule } from './arayuz-routing.module';

import { ArayuzPage } from './arayuz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArayuzPageRoutingModule
  ],
  declarations: [ArayuzPage]
})
export class ArayuzPageModule {}
