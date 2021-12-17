import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompAsistComponent } from '../../componentes/comp-asist/comp-asist.component';
import { CompQrComponent } from '../../componentes/comp-qr/comp-qr.component';

import { MenuDocentePage } from './menu-docente.page';

const routes: Routes = [
  {
    path: '',
    component: MenuDocentePage,

    children:[
      {
        path:'qr',
        component: CompQrComponent
      },

      {
        path:'asist',
        component: CompAsistComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuDocentePageRoutingModule {}
