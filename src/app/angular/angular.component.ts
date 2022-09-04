import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map, Observable, startWith } from 'rxjs';

interface Type {
  displayName: string;
  key: string;
  shortKey: string;
}

@Component({
  selector: 'dh-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent implements OnInit {

  formGroup: FormGroup;
  filteredOptions!: Observable<Type[]>;

  types: Type[] = [
    {
      displayName: 'module',
      key: 'module',
      shortKey: 'm'
    },
    {
      displayName: 'component',
      key: 'component',
      shortKey: 'c'
    },
    {
      displayName: 'service',
      key: 'service',
      shortKey: 's'
    },
    {
      displayName: 'pipe',
      key: 'pipe',
      shortKey: 'p'
    }
  ];

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.formGroup = this.fb.group({
      name: ['test'],
      type: ['module'],
      skipTests: [true],
      lazyLoading: [false]
    });
  }

  get f() {
    return this.formGroup.controls;
  }

  ngOnInit() {
    this.filteredOptions = this.f['type'].valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): Type[] {
    const filterValue = value.toLowerCase();

    return this.types.filter(option => option.displayName.toLowerCase().includes(filterValue));
  }

  getCode() {
    let code = 'ng g';
    const type = this.types.find(type => type.key === this.f['type'].value)?.shortKey;
    code += type ? ` ${type}` : '';
    const name = this.f['name'].value;
    code += name ? ` ${name}` : '';
    code += !this.is('module') && this.f['skipTests'].value ? ' --skip-tests' : '';
    code += this.f['lazyLoading'].value ? ` --route ${name} --module app.module` : '';
    return code;
  }

  is(value: 'module' | 'component' | 'pipe' | 'service') {
    return this.f['type'].value === value;
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
