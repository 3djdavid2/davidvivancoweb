import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MifotoComponent } from './mifoto.component';

const routes: Routes = [
  {
    path: '',
    component: MifotoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MifotoRoutingModule { }
