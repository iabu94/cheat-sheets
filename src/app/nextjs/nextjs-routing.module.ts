import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NextjsComponent } from './nextjs.component';

const routes: Routes = [{ path: '', component: NextjsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NextjsRoutingModule { }
