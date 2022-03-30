import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortafolioComponent } from './components/portafolio/portafolio.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'portafolio',
    component: PortafolioComponent
  },
  {
    path: '',
    component: PortafolioComponent
  },
  {
    path: '',
    children: [
      {
        path: 'miFoto',
        loadChildren: () => import('./pages/mifoto/mifoto.module').then(m => m.MifotoModule)
      },
      {
        path: 'contacto',
        loadChildren: () => import('./pages/contacto/contacto.module').then(m => m.ContactoModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
