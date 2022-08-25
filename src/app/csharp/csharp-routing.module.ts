import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CsharpComponent } from './csharp.component';

const routes: Routes = [{ path: '', component: CsharpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CsharpRoutingModule { }
