import { ClipboardModule } from "@angular/cdk/clipboard";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { AngularRoutingModule } from './angular-routing.module';
import { AngularComponent } from './angular.component';

@NgModule({
  declarations: [
    AngularComponent
  ],
  imports: [
    CommonModule,
    AngularRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    ClipboardModule,
    MatIconModule,
    MatSnackBarModule
  ]
})
export class AngularModule { }
