import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menu-docente',
    loadChildren: () => import('./pages/menu-docente/menu-docente.module').then( m => m.MenuDocentePageModule)
  },
  {
    path: 'recuperar-c',
    loadChildren: () => import('./pages/recuperar-c/recuperar-c.module').then( m => m.RecuperarCPageModule)
  },
  {
    path: 'not-found', //Cuando se levante un 404, a esta página estara dirigida
    loadChildren: () => import('./not-found/not-found.module').then( m => m.NotFoundPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
