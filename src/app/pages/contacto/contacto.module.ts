import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactoComponent } from './contacto.component';
import { ContactService } from 'src/app/services/contact.service';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AutoFocusInputDirective } from 'src/app/directivas/auto-focus-input.directive';

import {MatButtonModule} from '@angular/material/button';
import { NgHcaptchaModule } from 'ng-hcaptcha';

import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [
    ContactoComponent,
    AutoFocusInputDirective
  ],
  imports: [
    NgHcaptchaModule.forRoot({
      siteKey:environment.siteKey,
      languageCode: 'es' // optional, will default to browser language
  }),
    CommonModule,
    ContactoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers:[ContactService]
})
export class ContactoModule { }
