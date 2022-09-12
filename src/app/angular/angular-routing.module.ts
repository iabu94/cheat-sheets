import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular.component';
import { CliCommandsComponent } from './cli-commands/cli-commands.component';
import { DeploymentComponent } from './deployment/deployment.component';

const routes: Routes = [
  {
    path: '',
    component: AngularComponent,
    children: [
      {
        path: 'cli-commands',
        component: CliCommandsComponent
      },
      {
        path: 'deployment',
        component: DeploymentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
