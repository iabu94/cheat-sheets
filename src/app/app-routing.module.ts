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
        loadChildren: () => import('./csharp/csharp.module').then(m => m.CsharpModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
