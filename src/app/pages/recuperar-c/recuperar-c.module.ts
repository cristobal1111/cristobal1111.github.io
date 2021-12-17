import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperarCPageRoutingModule } from './recuperar-c-routing.module';

import { RecuperarCPage } from './recuperar-c.page';

import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperarCPageRoutingModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule
    
  ],
  declarations: [RecuperarCPage]
})
export class RecuperarCPageModule {}
