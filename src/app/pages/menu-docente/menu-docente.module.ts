import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuDocentePageRoutingModule } from './menu-docente-routing.module';

import { MenuDocentePage } from './menu-docente.page';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuDocentePageRoutingModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule
  ],
  declarations: [MenuDocentePage]
})
export class MenuDocentePageModule {}
