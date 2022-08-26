import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NetcoreComponent } from './netcore.component';

const routes: Routes = [{ path: '', component: NetcoreComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NetcoreRoutingModule { }
