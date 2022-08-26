import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'angular',
        pathMatch: 'full'
      },
      {
        path: 'angular',
        loadChildren: () => import('./angular/angular.module').then(m => m.AngularModule)
      },
      {
        path: 'csharp',
        loadChildren: () => import('./csharp/csharp.module').then(m => m.CsharpModule)
      },
      {
        path: 'netcore',
        loadChildren: () => import('./netcore/netcore.module').then(m => m.NetcoreModule)
      },
      {
        path: 'mssql',
        loadChildren: () => import('./mssql/mssql.module').then(m => m.MssqlModule)
      },
      {
        path: 'nextjs',
        loadChildren: () => import('./nextjs/nextjs.module').then(m => m.NextjsModule)
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
