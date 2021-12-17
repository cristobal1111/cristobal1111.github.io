import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';


import { HomePageRoutingModule } from './home-routing.module';
import { CompQrComponent } from '../../componentes/comp-qr/comp-qr.component';
import { CompAsistComponent } from '../../componentes/comp-asist/comp-asist.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MatListModule,
    MatCardModule,
    MatDividerModule
  ],
  declarations: [HomePage, CompAsistComponent, CompQrComponent, CompAsistComponent]
})
export class HomePageModule {}
