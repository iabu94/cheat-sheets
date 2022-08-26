import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MssqlComponent } from './mssql.component';

const routes: Routes = [{ path: '', component: MssqlComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MssqlRoutingModule { }
