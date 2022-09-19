import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

interface Platform {
  value: string;
  name: string;
}
@Component({
  selector: 'dh-deployment',
  templateUrl: './deployment.component.html',
  styleUrls: ['./deployment.component.scss']
})
export class DeploymentComponent {
  formGroup: FormGroup;
  platforms: Platform[];

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      platform: ['gh-pages']
    });
    this.platforms = [
      {
        name: 'GitHub Pages',
        value: 'gh-pages'
      }
    ];
  }
}
