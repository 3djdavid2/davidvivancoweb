import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MifotoRoutingModule } from './mifoto-routing.module';
import { MifotoComponent } from './mifoto.component';


@NgModule({
  declarations: [
    MifotoComponent
  ],
  imports: [
    CommonModule,
    MifotoRoutingModule
  ]
})
export class MifotoModule { }
