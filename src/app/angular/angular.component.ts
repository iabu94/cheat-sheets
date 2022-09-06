import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Type {
  name: string;
  key: string;
}

interface AngularFormGroupKeys {
  name: string;
  type: string;
  skipTests: boolean;
  lazyLoading: boolean;
  moduleName: string;
}

@Component({
  selector: 'dh-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent {

  formGroup: FormGroup;

  types: Type[] = [
    {
      name: 'module',
      key: 'm'
    },
    {
      name: 'component',
      key: 'c',
    },
    {
      name: 'service',
      key: 's'
    },
    {
      name: 'pipe',
      key: 'p'
    },
    {
      name: 'directive',
      key: 'd'
    }
  ];

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.formGroup = this.fb.group({
      name: ['test'],
      type: ['m'],
      skipTests: [true],
      lazyLoading: [false],
      moduleName: ['app']
    });
  }

  get f() {
    return this.formGroup.controls;
  }

  getCode() {
    let code = 'ng g';
    const type = this.types.find(type => type.key === this.valueOf('type'))?.key;
    code += type ? ` ${type}` : '';
    const name = this.valueOf('moduleName') !== 'app' ? `${this.valueOf('moduleName')}/${this.valueOf('name')}` : this.valueOf('name');
    code += name ? ` ${name}` : '';
    code += !this.is('m') && this.valueOf('skipTests') ? ' --skip-tests' : '';
    code += this.is('m') && this.valueOf('lazyLoading') ? ` --route ${name} --module app.module` : '';
    code += this.is('c') || this.is('d') ? ` -m ${this.valueOf('moduleName')}` : '';
    return code;
  }

  is(value: 'm' | 'c' | 'p' | 's' | 'd') {
    return this.valueOf('type') === value;
  }
  valueOf(key: keyof AngularFormGroupKeys) {
    return this.f[key].value;
  }

  copyToClipBoard(code: string) {
    return code;
  }

  copied() {
    this.snackBar.open('Copied to clipboard', '', {
      duration: 1000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: 'snack-bar'
    })
  }
}
